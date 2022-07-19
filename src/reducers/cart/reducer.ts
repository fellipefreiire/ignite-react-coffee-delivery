import { produce } from "immer"
import { api } from "../../services/api"
import { cartInit } from "../../store/contexts/CartContex"
import { ActionTypes } from "./actions"

export type Coffee = {
  id: string
  title: string
  imgUrl?: string
  price: number
  quantity: number
}

type Address = {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

export interface ICart {
  id: number | undefined
  coffees: Coffee[]
  address: Address
  totalCoffees: number
  deliveryCost: number
  totalPrice: number
  paymentMethod: string
  purchasedDate: Date | undefined
}

interface ICartState {
  cart: ICart
}

export const cartReducer = (state: ICartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.cart.deliveryCost = 3.50

        const coffees = draft.cart.coffees
        const coffeeAlreadyOnCart = coffees.find((coffee) => coffee.id === action.payload.newCoffee.id)

        if (coffeeAlreadyOnCart) {
          coffeeAlreadyOnCart.quantity += action.payload.newCoffee.quantity
        } else {
          coffees.push(action.payload.newCoffee)
        }

        const newTotalCoffees = coffees.reduce((acc, cv) => {
          return acc + (cv.price * cv.quantity)
        }, 0)
        draft.cart.totalCoffees = Number(newTotalCoffees.toFixed(2))

        draft.cart.totalPrice = draft.cart.totalCoffees + draft.cart.deliveryCost
      })
    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const coffeeToBeRemoved = draft.cart.coffees.find((coffee) => coffee.id === action.payload.coffeeId)

        const totalCoffeePrice = coffeeToBeRemoved!.price * coffeeToBeRemoved!.quantity

        const updatedCoffees = draft.cart.coffees.filter((coffee) => coffee.id !== coffeeToBeRemoved!.id)

        draft.cart.coffees = updatedCoffees

        if (draft.cart.coffees.length === 0) {
          draft.cart.deliveryCost = 0;
          draft.cart.totalPrice = 0;
          draft.cart.totalCoffees = 0;
        } else {
          draft.cart.totalCoffees -= totalCoffeePrice
          draft.cart.totalPrice -= totalCoffeePrice
        }
      })
    case ActionTypes.ADD_COFFEE_FROM_CHECKOUT:
      return produce(state, (draft) => {
        const coffee = draft.cart.coffees.find((coffee) => coffee.id === action.payload.coffeeId)

        coffee!.quantity += 1
        draft.cart.totalCoffees += coffee!.price
        draft.cart.totalPrice += coffee!.price
      })
    case ActionTypes.SUBTRACT_COFFEE_FROM_CHECKOUT:
      return produce(state, (draft) => {
        const coffee = draft.cart.coffees.find((coffee) => coffee.id === action.payload.coffeeId)

        if (coffee!.quantity === 1) return

        coffee!.quantity -= 1
        draft.cart.totalCoffees -= coffee!.price
        draft.cart.totalPrice -= coffee!.price
      })
    case ActionTypes.SUBMIT_REQUEST:
      return produce(state, (draft) => {
        const cart = action.payload.cart

        draft.cart.address = cart.address
        draft.cart.paymentMethod = cart.paymentMethod

        const makeRequest = async () => {
          await api.post('/requests', cart)
        }

        makeRequest()
      })
    case ActionTypes.CLEAR_STATE_AND_LOCAL_STORAGE:
      return produce(state, (draft) => {
        draft.cart = cartInit.cart

        localStorage.removeItem('@ignite-coffee-delivery-state-1.0.0')
      })
    case ActionTypes.PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.cart.paymentMethod = action.payload.paymentMethod
      })
    default:
      return state
  }
}
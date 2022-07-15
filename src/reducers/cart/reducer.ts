import { produce } from "immer"
import { ActionTypes } from "./actions"

export type Coffee = {
  id: string
  title: string
  imgUrl: string
  price: number
  quantity: number
}

interface ICart {
  coffees: Coffee[]
  totalCoffees: number
  deliveryCost: number
  totalPrice: number
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
    default:
      return state
  }
}
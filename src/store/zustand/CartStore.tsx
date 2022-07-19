import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { api } from '../../services/api'

type Coffee = {
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

interface ICart {
  id: number | undefined
  coffees: Coffee[]
  address: Address
  totalCoffees: number
  deliveryCost: number
  totalPrice: number
  paymentMethod: string
  purchasedDate: Date | undefined
}

interface ICartStore {
  cart: ICart
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffeeId: string) => void
  addCoffeeFromCheckout: (coffeeId: string) => void
  subtractCofeeFromCheckout: (coffeeId: string) => void
  submitRequest: (cart: ICart) => void
  clearStateAndLocalStorage: () => void
  setPaymentMethod: (paymentMethod: string) => void
}

const cartInit = {
  cart: {
    id: undefined,
    coffees: [],
    address: {
      bairro: '',
      cep: '',
      cidade: '',
      numero: '',
      rua: '',
      uf: '',
      complemento: ''
    },
    totalCoffees: 0,
    deliveryCost: 0,
    totalPrice: 0,
    paymentMethod: '',
    purchasedDate: undefined
  }
}

export const useCart = create<ICartStore>()(
  persist(
    immer((set) => ({
      cart: cartInit.cart,
      addToCart: (coffee) =>
        set((state) => {
          state.cart.deliveryCost = 3.50

          const coffees = state.cart.coffees
          const coffeeAlreadyOnCart = coffees.find((coffeeOnCart) => coffeeOnCart.id === coffee.id)

          if (coffeeAlreadyOnCart) {
            coffeeAlreadyOnCart.quantity += coffee.quantity
          } else {
            coffees.push(coffee)
          }

          const newTotalCoffees = coffees.reduce((acc, cv) => {
            return acc + (cv.price * cv.quantity)
          }, 0)

          state.cart.totalCoffees = Number(newTotalCoffees.toFixed(2))
          state.cart.totalPrice = state.cart.totalCoffees + state.cart.deliveryCost
        }),
      removeFromCart: (coffeeId) =>
        set((state) => {
          const coffeeToBeRemoved = state.cart.coffees.find((coffeeToRemove) => coffeeToRemove.id === coffeeId)

          const totalCoffeePrice = coffeeToBeRemoved!.price * coffeeToBeRemoved!.quantity

          const updatedCoffees = state.cart.coffees.filter((coffee) => coffee.id !== coffeeToBeRemoved!.id)

          state.cart.coffees = updatedCoffees

          if (state.cart.coffees.length === 0) {
            state.cart.deliveryCost = 0;
            state.cart.totalPrice = 0;
            state.cart.totalCoffees = 0;
          } else {
            state.cart.totalCoffees -= totalCoffeePrice
            state.cart.totalPrice -= totalCoffeePrice
          }
        }),
      addCoffeeFromCheckout: (coffeeId) => {
        set((state) => {
          const coffee = state.cart.coffees.find((coffee) => coffee.id === coffeeId)

          coffee!.quantity += 1
          state.cart.totalCoffees += coffee!.price
          state.cart.totalPrice += coffee!.price
        })
      },
      subtractCofeeFromCheckout: (coffeeId) => {
        set((state) => {
          const coffee = state.cart.coffees.find((coffee) => coffee.id === coffeeId)

          if (coffee!.quantity === 1) return

          coffee!.quantity -= 1
          state.cart.totalCoffees -= coffee!.price
          state.cart.totalPrice -= coffee!.price
        })
      },
      submitRequest: (cart) => {
        set((state) => {
          state.cart.address = cart.address
          state.cart.paymentMethod = cart.paymentMethod

          const makeRequest = async () => {
            await api.post('/requests', cart)
          }

          makeRequest()
        })
      },
      clearStateAndLocalStorage: () => {
        set((state) => {
          state.cart = cartInit.cart

          localStorage.removeItem('@ignite-coffee-delivery-state-1.0.0')
        })
      },
      setPaymentMethod: (paymentMethod) => {
        set((state) => {
          state.cart.paymentMethod = paymentMethod
        })
      }
    })),
    {
      name: '@ignite-coffee-delivery-state-1.0.0'
    }
  )
)
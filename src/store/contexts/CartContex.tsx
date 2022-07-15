import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { addToCartAction, removeFromCartAction } from '../../reducers/cart/actions'
import { cartReducer } from '../../reducers/cart/reducer'

type Coffee = {
  id: string
  title: string
  imgUrl: string
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
  coffees: Coffee[]
  totalCoffees: number
  deliveryCost: number
  totalPrice: number
}

interface ICartContext {
  cart: ICart
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffeeId: string) => void
  // address: Address
  // paymentMethod: 'credito' | 'debito' | 'dinheiro'
}

interface ICartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as ICartContext)

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: {
        coffees: [],
        totalCoffees: 0,
        deliveryCost: 0,
        totalPrice: 0
      }
    }
  )

  const { cart } = cartState

  const addToCart = (coffee: Coffee) => {
    dispatch(addToCartAction(coffee))
  }

  const removeFromCart = (coffeeId: string) => {
    dispatch(removeFromCartAction(coffeeId))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
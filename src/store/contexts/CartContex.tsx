import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { addCoffeeFromCheckoutAction, addToCartAction, clearStateAndLocalStorageAction, paymentMethodAction, removeFromCartAction, submitRequestAction, subtractCoffeeFromCheckoutAction } from '../../reducers/cart/actions'
import { cartReducer, Coffee, ICart } from '../../reducers/cart/reducer'

interface ICartContext {
  cart: ICart
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffeeId: string) => void
  addCoffeeFromCheckout: (coffeeId: string) => void
  subtractCofeeFromCheckout: (coffeeId: string) => void
  submitRequest: (cart: ICart) => void
  clearStateAndLocalStorage: () => void
  setPaymentMethod: (paymentMethod: string) => void
}

interface ICartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as ICartContext)

export const cartInit = {
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

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
  
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartInit
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return cartInit
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

  const addCoffeeFromCheckout = (coffeeId: string) => {
    dispatch(addCoffeeFromCheckoutAction(coffeeId))
  }

  const subtractCofeeFromCheckout = (coffeeId: string) => {
    dispatch(subtractCoffeeFromCheckoutAction(coffeeId))
  }

  const submitRequest = (cart: ICart) => {
    dispatch(submitRequestAction(cart))
  }

  const clearStateAndLocalStorage = () => {
    dispatch(clearStateAndLocalStorageAction())
  }

  const setPaymentMethod = (paymentMethod: string) => {
    dispatch(paymentMethodAction(paymentMethod))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-coffee-delivery-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, addCoffeeFromCheckout, subtractCofeeFromCheckout, submitRequest, clearStateAndLocalStorage, setPaymentMethod }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
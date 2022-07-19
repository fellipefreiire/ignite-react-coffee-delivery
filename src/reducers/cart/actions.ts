import { Coffee, ICart } from "./reducer"

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ADD_COFFEE_FROM_CHECKOUT = 'ADD_COFFEE_FROM_CHECKOUT',
  SUBTRACT_COFFEE_FROM_CHECKOUT = 'SUBTRACT_COFFEE_FROM_CHECKOUT',
  SUBMIT_REQUEST = 'SUBMIT_REQUEST',
  CLEAR_STATE_AND_LOCAL_STORAGE = 'CLEAR_STATE_AND_LOCAL_STORAGE',
  PAYMENT_METHOD = 'PAYMENT_METHOD'
}

export const addToCartAction = (newCoffee: Coffee) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      newCoffee
    }
  }
}

export const removeFromCartAction = (coffeeId: string) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      coffeeId
    }
  }
}

export const addCoffeeFromCheckoutAction = (coffeeId: string) => {
  return {
    type: ActionTypes.ADD_COFFEE_FROM_CHECKOUT,
    payload: {
      coffeeId
    }
  }
}

export const subtractCoffeeFromCheckoutAction = (coffeeId: string) => {
  return {
    type: ActionTypes.SUBTRACT_COFFEE_FROM_CHECKOUT,
    payload: {
      coffeeId
    }
  }
}

export const submitRequestAction = (cart: ICart) => {
  return {
    type: ActionTypes.SUBMIT_REQUEST,
    payload: {
      cart
    }
  }
}

export const clearStateAndLocalStorageAction = () => {
  return {
    type: ActionTypes.CLEAR_STATE_AND_LOCAL_STORAGE,
    payload: {}
  }
}

export const paymentMethodAction = (paymentMethod: string) => {
  return {
    type: ActionTypes.PAYMENT_METHOD,
    payload: {
      paymentMethod
    }
  }
}
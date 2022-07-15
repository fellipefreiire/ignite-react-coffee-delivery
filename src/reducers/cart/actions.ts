import { Coffee } from "./reducer"

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ADD_COFFEE_FROM_CHECKOUT= 'ADD_COFFEE_FROM_CHECKOUT',
  SUBTRACT_COFFEE_FROM_CHECKOUT= 'SUBTRACT_COFFEE_FROM_CHECKOUT'
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
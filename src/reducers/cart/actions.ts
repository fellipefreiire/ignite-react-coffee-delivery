import { Coffee } from "./reducer"

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
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
import {
  addToCart,
  decreaseProductQuantity,
  deleteFromCart,
  increaseProductQuantity,
} from '../lib/utils';

import { CartActionTypes, CartActions, CartState } from './types';

/**
 * A function for controlling the state of the cart context
 *
 * @param state State for the context
 * @param action Type of action
 *
 * @returns Updated state
 */
export const cartReducer = (
  state: CartState,
  action: CartActions,
): CartState => {
  switch (action.type) {
    case CartActionTypes.AddToCart:
      return {
        ...state,
        items: addToCart(state.items, action.payload),
      };

    case CartActionTypes.DeleteFromCart:
      return {
        ...state,
        items: deleteFromCart(state.items, action.payload.id),
      };

    case CartActionTypes.IncreaseQuantity:
      return {
        ...state,
        items: increaseProductQuantity(state.items, action.payload.id),
      };

    case CartActionTypes.DecreaseQuantity:
      return {
        ...state,
        items: decreaseProductQuantity(state.items, action.payload.id),
      };

    case CartActionTypes.ResetCart:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

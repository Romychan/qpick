// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Product } from '~/entities/Product/@x';

/** Base interface for cart item */
export interface CartItem {
  quantity: number;
  product: Product;
}

/** The base state interface for the context */
export interface CartState {
  items: CartItem[];
}

/** Interface with properties and methods of working with context */
export interface CartStoreState extends CartState {
  /**
   * Add a product to the cart
   *
   * @param payload Product to add to cart
   */
  addToCart: (payload: Product) => void;
  /**
   * Delete a product from the cart
   *
   * @param payload The ID of the product to be deleted from the cart
   */
  deleteFromCart: (payload: { id: number }) => void;
  /**
   * Increase the number of product in the cart
   *
   * @param payload Product ID to increase the quantity
   */
  increaseQuantity: (payload: { id: number }) => void;
  /**
   * Decrease the number of product in the cart
   *
   * @param payload Product ID to decrease the quantity
   */
  decreaseQuantity: (payload: { id: number }) => void;
  /**  Reset the cart */
  resetCart: () => void;
}

/** An enum containing the different action types */
export enum CartActionTypes {
  AddToCart = 'ADD_TO_CART',
  DeleteFromCart = 'DELETE_FROM_CART',
  IncreaseQuantity = 'INCREASE_QUANTITY',
  DecreaseQuantity = 'DECREASE_QUANTITY',
  ResetCart = 'RESET_CART',
}

/** The type of action to add a product to the cart */
export interface AddToCartAction {
  type: CartActionTypes.AddToCart;
  payload: Product;
}

/** The type of action to remove a product from the cart */
export interface DeleteFromCartAction {
  type: CartActionTypes.DeleteFromCart;
  payload: { id: number };
}

/** The type of action to increase the quantity of product in the cart */
export interface IncreaseQuantityAction {
  type: CartActionTypes.IncreaseQuantity;
  payload: { id: number };
}

/** The type of action to decrease the quantity of product in the cart */
export interface DecreaseQuantityAction {
  type: CartActionTypes.DecreaseQuantity;
  payload: { id: number };
}

/** The type of action to reset the cart */
export interface ResetCartAction {
  type: CartActionTypes.ResetCart;
}

/** List of all cart type actions */
export type CartActions =
  | AddToCartAction
  | DeleteFromCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | ResetCartAction;

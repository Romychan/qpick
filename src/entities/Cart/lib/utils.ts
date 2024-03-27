// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Product } from '~/entities/Product/@x';

import { CartItem } from '../model/types';

/**
 * Add a product to the cart
 *
 * @param cartItems The current state of the cart
 * @param product Product to add to cart
 * @returns Updated state of the product cart
 */
export const addToCart = (cartItems: CartItem[], product: Product) => {
  const productInCart = cartItems.find(
    (item) => item.product.id === product.id,
  );

  if (!productInCart) {
    return [...cartItems, { product, quantity: 1 }];
  } else {
    return cartItems.map((item) =>
      productInCart.product.id === item.product.id
        ? { ...productInCart, quantity: item.quantity + 1 }
        : item,
    );
  }
};

/**
 * Delete a product from the cart
 *
 * @param cartItems The current state of the cart
 * @param id The ID of the product to be deleted from the cart
 * @returns Updated state of the product cart
 */
export const deleteFromCart = (cartItems: CartItem[], id: number) => {
  return cartItems.filter((item) => item.product.id !== id);
};

/**
 * Increase the number of product in the cart
 *
 * @param cartItems The current state of the cart
 * @param id Product ID to increase the quantity
 * @returns Updated state of the product cart
 */
export const increaseProductQuantity = (cartItems: CartItem[], id: number) => {
  const productInCart = cartItems.find((item) => item.product.id === id);

  if (productInCart) {
    return cartItems.map((item) =>
      productInCart.product.id === item.product.id
        ? { ...productInCart, quantity: item.quantity + 1 }
        : item,
    );
  }

  return cartItems;
};

/**
 * Decrease the number of product in the cart
 *
 * @param cartItems The current state of the cart
 * @param id Product ID to decrease the quantity
 * @returns Updated state of the product cart
 */
export const decreaseProductQuantity = (cartItems: CartItem[], id: number) => {
  const productInCart = cartItems.find((item) => item.product.id === id);

  if (productInCart) {
    return cartItems.map((item) =>
      productInCart.product.id === item.product.id
        ? { ...productInCart, quantity: item.quantity - 1 }
        : item,
    );
  }

  return cartItems;
};

import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { MOCK_PRODUCTS } from '~/entities/Product';
import { MOCK_CART } from '~/entities/Cart';
import { CartContext } from '~/entities/Cart';

import { AddToCart } from './AddToCart';

const MOCK_CART_STORE = {
  items: MOCK_CART,
  addToCart: vi.fn(),
  deleteFromCart: vi.fn(),
  increaseQuantity: vi.fn(),
  decreaseQuantity: vi.fn(),
  resetCart: vi.fn(),
};

describe('AddToCart', () => {
  it('should render correctly', () => {
    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <AddToCart product={MOCK_PRODUCTS[0]} />
      </CartContext.Provider>,
    );

    const addToCartElement = screen.getByTestId('button-add-to-cart');

    expect(addToCartElement).toBeInTheDocument();
  });

  it('should the product be added to the cart', () => {
    const spy = vi.spyOn(MOCK_CART_STORE, 'addToCart');

    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <AddToCart product={MOCK_PRODUCTS[0]} />
      </CartContext.Provider>,
    );

    const addToCartElement = screen.getByTestId('button-add-to-cart');

    fireEvent.click(addToCartElement);

    expect(spy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const container = render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <AddToCart product={MOCK_PRODUCTS[0]} />
      </CartContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

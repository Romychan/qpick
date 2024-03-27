import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { MOCK_CART } from '~/entities/Cart';
import { CartContext } from '~/entities/Cart';

import { CounterCart } from './CounterCart';

const MOCK_CART_STORE = {
  items: MOCK_CART,
  addToCart: vi.fn(),
  deleteFromCart: vi.fn(),
  increaseQuantity: vi.fn(),
  decreaseQuantity: vi.fn(),
  resetCart: vi.fn(),
};

describe('CounterCart', () => {
  it('should render correctly', () => {
    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <CounterCart
          id={MOCK_CART[0].product.price}
          price={MOCK_CART[0].product.price}
          quantity={MOCK_CART[0].quantity}
        />
      </CartContext.Provider>,
    );

    const totalPriceElement = screen.getByTestId('cart-counter-total');

    expect(totalPriceElement).toBeInTheDocument();
  });

  it('should increasing the quantity of product work correctly', () => {
    const spy = vi.spyOn(MOCK_CART_STORE, 'increaseQuantity');

    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <CounterCart
          id={MOCK_CART[0].product.price}
          price={MOCK_CART[0].product.price}
          quantity={MOCK_CART[0].quantity}
        />
      </CartContext.Provider>,
    );

    const incrementElement = screen.getByTestId('counter-increment');

    fireEvent.click(incrementElement);

    expect(spy).toHaveBeenCalled();
  });

  it('should decreasing the quantity of product work correctly', () => {
    const spy = vi.spyOn(MOCK_CART_STORE, 'decreaseQuantity');

    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <CounterCart
          id={MOCK_CART[0].product.price}
          price={MOCK_CART[0].product.price}
          quantity={MOCK_CART[0].quantity}
        />
      </CartContext.Provider>,
    );

    const decrementElement = screen.getByTestId('counter-decrement');

    fireEvent.click(decrementElement);

    expect(spy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const container = render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <CounterCart
          id={MOCK_CART[0].product.price}
          price={MOCK_CART[0].product.price}
          quantity={MOCK_CART[0].quantity}
        />
      </CartContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

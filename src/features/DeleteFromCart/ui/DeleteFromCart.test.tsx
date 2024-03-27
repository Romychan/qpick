import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { MOCK_CART } from '~/entities/Cart';
import { CartContext } from '~/entities/Cart';

import { DeleteFromCart } from './DeleteFromCart';

const MOCK_CART_STORE = {
  items: MOCK_CART,
  addToCart: vi.fn(),
  deleteFromCart: vi.fn(),
  increaseQuantity: vi.fn(),
  decreaseQuantity: vi.fn(),
  resetCart: vi.fn(),
};

describe('DeleteFromCart', () => {
  it('should render correctly', () => {
    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <DeleteFromCart id={1} />
      </CartContext.Provider>,
    );

    const deleteElement = screen.getByTestId('button-delete-from-cart');

    expect(deleteElement).toBeInTheDocument();
  });

  it('should the product be deleted from the cart', () => {
    const spy = vi.spyOn(MOCK_CART_STORE, 'deleteFromCart');

    render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <DeleteFromCart id={1} />
      </CartContext.Provider>,
    );

    const DeleteFromCartElement = screen.getByTestId('button-delete-from-cart');

    fireEvent.click(DeleteFromCartElement);

    expect(spy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const container = render(
      <CartContext.Provider value={MOCK_CART_STORE}>
        <DeleteFromCart id={1} />
      </CartContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

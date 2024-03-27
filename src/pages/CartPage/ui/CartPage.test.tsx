import { RenderResult, fireEvent, screen } from '@testing-library/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';

import { CartPage } from './CartPage';

describe('CartPage', () => {
  describe('if there are products in the cart list', () => {
    let container: RenderResult;

    beforeEach(() => {
      container = renderWithRouter(
        <CartContextProvider preloadState={{ items: MOCK_CART }}>
          <CartPage />
        </CartContextProvider>,
      );
    });

    it('should render correctly', () => {
      const totalCheckoutElement = screen.getByTestId('checkout-total-price');
      const productRowElement = screen.getByTestId('product-row');

      expect(totalCheckoutElement).toBeInTheDocument();
      expect(productRowElement).toBeInTheDocument();
    });

    it('should the checkout button not be disabled', () => {
      const buttonCheckoutElement = screen.getByTestId('checkout-button');

      expect(buttonCheckoutElement).not.toBeDisabled();
    });

    it('should change the data in the cart', () => {
      const incrementElement = screen.getByTestId('counter-increment');
      const decrementElement = screen.getByTestId('counter-decrement');
      const quantityElement = screen.getByTestId('counter-count');
      const totalCheckoutElement = screen.getByTestId('checkout-total-price');

      expect(quantityElement).toHaveTextContent(/2/i);

      fireEvent.click(incrementElement);

      expect(quantityElement).toHaveTextContent(/3/i);
      expect(totalCheckoutElement).toHaveTextContent(/3 600/i);

      fireEvent.click(decrementElement);

      expect(quantityElement).toHaveTextContent(/2/i);
      expect(totalCheckoutElement).toHaveTextContent(/2 400/i);
    });

    it('should the product be deleted from the cart', () => {
      const deleteElement = screen.getByTestId('button-delete-from-cart');
      const productRowElement = screen.getByTestId('product-row');

      expect(productRowElement).toBeInTheDocument();

      fireEvent.click(deleteElement);

      expect(productRowElement).not.toBeInTheDocument();

      const emptyElement = screen.getByTestId('cart-empty');
      const totalCheckoutElement = screen.getByTestId('checkout-total-price');

      expect(emptyElement).toBeInTheDocument();
      expect(totalCheckoutElement).toHaveTextContent(/0/i);
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('CartPage with empty cart', () => {
    let container: RenderResult;

    beforeEach(() => {
      container = renderWithRouter(
        <CartContextProvider>
          <CartPage />
        </CartContextProvider>,
      );
    });

    it('should render correctly', () => {
      const emptyElement = screen.getByTestId('cart-empty');
      expect(emptyElement).toBeInTheDocument();
    });

    it('should the checkout button be disabled', () => {
      const buttonCheckoutElement = screen.getByTestId('checkout-button');

      expect(buttonCheckoutElement).toBeDisabled();
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});

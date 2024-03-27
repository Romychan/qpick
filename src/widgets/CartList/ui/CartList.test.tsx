import { screen } from '@testing-library/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';

import { CartList } from './CartList';

describe('CartList', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <CartContextProvider preloadState={{ items: MOCK_CART }}>
        <CartList />
      </CartContextProvider>,
    );

    const productRowElement = screen.getAllByTestId('product-row');

    expect(productRowElement).toHaveLength(1);
  });

  it('should be displayed correctly with an empty cart list', () => {
    renderWithRouter(
      <CartContextProvider>
        <CartList />
      </CartContextProvider>,
    );

    const productRowElement = screen.queryAllByTestId('product-row');
    const emptyElement = screen.getByTestId('cart-empty');

    expect(productRowElement).toHaveLength(0);
    expect(emptyElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = renderWithRouter(
      <CartContextProvider preloadState={{ items: MOCK_CART }}>
        <CartList />
      </CartContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});

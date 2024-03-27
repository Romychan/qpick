import { screen } from '@testing-library/react';

import { CartContextProvider } from '~/entities/Cart';
import { MOCK_PRODUCTS } from '~/entities/Product';

import { renderWithRouter } from '~/shared/lib/tests';

import { ProductList } from './ProductList';

describe('ProductList', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <CartContextProvider>
        <ProductList title="Test Title" products={MOCK_PRODUCTS} />
      </CartContextProvider>,
    );

    const titleElement = screen.getByText('Test Title');
    const productCardElement = screen.getAllByTestId('product-card');

    expect(titleElement).toBeInTheDocument();
    expect(productCardElement).toHaveLength(9);
  });

  it('should be displayed correctly with an empty product list', () => {
    renderWithRouter(
      <CartContextProvider>
        <ProductList title="Test Title" products={[]} />
      </CartContextProvider>,
    );

    const productCardElement = screen.queryAllByTestId('product-card');
    const emptyElement = screen.getByTestId('products-empty');

    expect(productCardElement).toHaveLength(0);
    expect(emptyElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = renderWithRouter(
      <CartContextProvider>
        <ProductList title="Test Title" products={MOCK_PRODUCTS} />
      </CartContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});

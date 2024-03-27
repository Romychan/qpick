import { RenderResult, screen } from '@testing-library/react';

import { CartContextProvider } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';

import { CatalogPage } from './CatalogPage';

describe('CatalogPage', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithRouter(
      <CartContextProvider>
        <CatalogPage />
      </CartContextProvider>,
    );
  });

  it('should render correctly', () => {
    const productsElement = screen.getAllByTestId('product-card');

    expect(productsElement).toHaveLength(9);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

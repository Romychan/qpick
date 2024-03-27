import { screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';

import { CartContextProvider } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';
import { OVERVIEW_ROUTE } from '~/shared/config';

import { ProductOverview } from './ProductOverview';

describe('ProductOverview', () => {
  it('should render correctly', () => {
    const productId = 1;

    renderWithRouter(
      <Routes>
        <Route
          path={`${OVERVIEW_ROUTE}/:productId`}
          element={
            <CartContextProvider>
              <ProductOverview />
            </CartContextProvider>
          }
        />
      </Routes>,
      `${OVERVIEW_ROUTE}/${productId}`,
    );

    const drawerElement = screen.getByTestId('drawer');
    const detailsElement = screen.getByTestId('product-details');

    expect(drawerElement).toBeInTheDocument();
    expect(detailsElement).toBeInTheDocument();
  });

  it('should not show the product details if an invalid ID is specified', () => {
    const productId = 'TestTestTest123';

    renderWithRouter(
      <Routes>
        <Route
          path={`${OVERVIEW_ROUTE}/:productId`}
          element={
            <CartContextProvider>
              <ProductOverview />
            </CartContextProvider>
          }
        />
        <Route path="/" element="Empty" />
      </Routes>,
      `${OVERVIEW_ROUTE}/${productId}`,
    );

    const drawerElement = screen.queryByTestId('drawer');
    const detailsElement = screen.queryByTestId('product-details');

    expect(drawerElement).not.toBeInTheDocument();
    expect(detailsElement).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const productId = 1;

    const container = renderWithRouter(
      <Routes>
        <Route
          path={`${OVERVIEW_ROUTE}/:productId`}
          element={
            <CartContextProvider>
              <ProductOverview />
            </CartContextProvider>
          }
        />
      </Routes>,
      `${OVERVIEW_ROUTE}/${productId}`,
    );

    expect(container).toMatchSnapshot();
  });
});

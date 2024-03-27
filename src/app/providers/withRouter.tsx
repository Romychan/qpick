import { Navigate, createBrowserRouter } from 'react-router-dom';

import { CatalogPage } from '~/pages/CatalogPage';
import { CartPage } from '~/pages/CartPage';
import { PaymentPage } from '~/pages/PaymentPage';

import { ProductOverview } from '~/widgets/ProductOverview';

import {
  CART_ROUTE,
  MAIN_ROUTE,
  ORDER_ROUTE,
  OVERVIEW_ROUTE,
} from '~/shared/config';

import { withBaseLayout } from '../layouts/withBaseLayout';

/** The function creates a router for the application and switches between different pages on the application */
export const withRouter = () =>
  createBrowserRouter([
    {
      element: withBaseLayout,
      children: [
        {
          path: MAIN_ROUTE,
          element: <CatalogPage />,
          children: [
            {
              path: `${OVERVIEW_ROUTE}/:productId`,
              element: <ProductOverview />,
            },
          ],
        },
        {
          path: CART_ROUTE,
          element: <CartPage />,
        },
        {
          path: ORDER_ROUTE,
          element: <PaymentPage />,
        },
        {
          path: '*',
          element: <Navigate to={MAIN_ROUTE} replace />,
        },
      ],
    },
  ]);

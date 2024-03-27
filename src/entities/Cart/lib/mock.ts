// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Product } from '~/entities/Product/@x';

import { CartItem } from '../model/types';

/** Mock product for the cart */
export const MOCK_CART_PRODUCT: Product = {
  id: 1,
  title: 'Product',
  rate: 4.2,
  image: '/images/catalog/headphone-1.png',
  price: 1200,
  oldPrice: 1300,
  description: 'Test',
  category: 'Наушники',
};

/** List of mock cart items */
export const MOCK_CART: CartItem[] = [
  {
    product: MOCK_CART_PRODUCT,
    quantity: 2,
  },
];

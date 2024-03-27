import { MOCK_CART, MOCK_CART_PRODUCT } from '../mock';
import {
  addToCart,
  decreaseProductQuantity,
  deleteFromCart,
  increaseProductQuantity,
} from '../utils';

describe('addToCart', () => {
  it('should work correctly if this product is not in the cart', () => {
    const MOCK_NEW_ITEM = { ...MOCK_CART_PRODUCT, id: 31, title: 'Test' };

    expect(addToCart([], MOCK_NEW_ITEM)).toEqual([
      { quantity: 1, product: MOCK_NEW_ITEM },
    ]);
  });

  it('should work correctly if this product is in the cart', () => {
    expect(addToCart(MOCK_CART, MOCK_CART_PRODUCT)).toEqual([
      { quantity: 3, product: MOCK_CART_PRODUCT },
    ]);
  });
});

describe('deleteFromCart', () => {
  it('should work correctly', () => {
    expect(deleteFromCart(MOCK_CART, 1)).toEqual([]);
  });
});

describe('increaseProductQuantity', () => {
  it('should work correctly', () => {
    expect(increaseProductQuantity(MOCK_CART, 1)).toEqual([
      { quantity: 3, product: MOCK_CART_PRODUCT },
    ]);
  });

  it('should work correctly if this product is not in the cart', () => {
    expect(increaseProductQuantity(MOCK_CART, 2)).toEqual(MOCK_CART);
  });
});

describe('decreaseProductQuantity', () => {
  it('should work correctly', () => {
    expect(decreaseProductQuantity(MOCK_CART, 1)).toEqual([
      { quantity: 1, product: MOCK_CART_PRODUCT },
    ]);
  });

  it('should work correctly if this product is not in the cart', () => {
    expect(decreaseProductQuantity(MOCK_CART, 2)).toEqual(MOCK_CART);
  });
});

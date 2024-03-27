import { PropsWithChildren, createContext, useEffect, useReducer } from 'react';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Product } from '~/entities/Product/@x';

import { useIsMounted } from '~/shared/lib/hooks';

import { CART_STORAGE_NAME } from '../config';

import { cartReducer } from './reducer';
import { CartActionTypes, CartState, CartStoreState } from './types';

const initialState = {
  items: [],
};

const setupStore = () => {
  const cartItems = sessionStorage.getItem(CART_STORAGE_NAME);

  return cartItems?.length ? { items: JSON.parse(cartItems) } : initialState;
};

export const CartContext = createContext<CartStoreState | null>(null);

interface ICartContextProviderProps {
  /** Initial value for the context */
  preloadState?: CartState;
}

export const CartContextProvider = ({
  preloadState = setupStore(),
  children,
}: PropsWithChildren<ICartContextProviderProps>) => {
  const [state, dispatch] = useReducer(cartReducer, preloadState);
  const isMounted = useIsMounted();

  const addToCart = (payload: Product) => {
    dispatch({ type: CartActionTypes.AddToCart, payload });
  };

  const deleteFromCart = (payload: { id: number }) => {
    dispatch({ type: CartActionTypes.DeleteFromCart, payload });
  };

  const increaseQuantity = (payload: { id: number }) => {
    dispatch({ type: CartActionTypes.IncreaseQuantity, payload });
  };

  const decreaseQuantity = (payload: { id: number }) => {
    dispatch({ type: CartActionTypes.DecreaseQuantity, payload });
  };

  const resetCart = () => {
    dispatch({ type: CartActionTypes.ResetCart });
  };

  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem(CART_STORAGE_NAME, JSON.stringify(state.items));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

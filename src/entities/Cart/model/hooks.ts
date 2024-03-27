import { useContext } from 'react';

import { CartContext } from './context';

/**
 * A hook to get the cart context
 *
 * @returns Properties and methods of working with Cart context
 */
export const useCartStore = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('useCartStore must be used within a CartContextProvider');
  }

  return {
    ...context,
  };
};

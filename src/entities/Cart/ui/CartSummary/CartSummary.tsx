import { ReactNode, useMemo } from 'react';

import { Card } from '~/shared/ui/Card';
import { formatPrice } from '~/shared/lib/utils';

import { CartItem } from '../../model/types';

import styles from './CartSummary.module.scss';

interface ICartSummaryProps {
  /** The list with the product in the cart */
  cart: CartItem[];
  /** The slot of the component for interactive elements */
  actions: ReactNode;
}

/** This component is used to display information about the total price of products in the cart */
export const CartSummary = ({ cart, actions }: ICartSummaryProps) => {
  const totalPrice = useMemo(
    () => cart.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0),
    [cart],
  );

  return (
    <Card className={styles.container}>
      <div className={styles.information}>
        <span className={styles.text}>Итого</span>
        <span className={styles.text} data-testid="checkout-total-price">
          ₽ {formatPrice(totalPrice, 'decimal') || 0}
        </span>
      </div>

      <div className={styles.actions}>{actions}</div>
    </Card>
  );
};

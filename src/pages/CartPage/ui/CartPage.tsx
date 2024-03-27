import { useNavigate } from 'react-router-dom';

import { CartList } from '~/widgets/CartList';

import { CartSummary, useCartStore } from '~/entities/Cart';

import { Button } from '~/shared/ui/Button';
import { ORDER_ROUTE } from '~/shared/config';

import styles from './CartPage.module.scss';

/** This component is used to display the cart page */
export const CartPage = () => {
  const navigate = useNavigate();
  const { items: cart } = useCartStore();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.content}>
        <div className={styles.items}>
          <CartList />
        </div>

        <div className={styles.checkout}>
          <CartSummary
            cart={cart}
            actions={
              <Button
                size="lg"
                className={styles.button}
                disabled={cart.length === 0}
                onClick={() => navigate(ORDER_ROUTE)}
                data-testid="checkout-button"
              >
                Перейти к оформлению
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

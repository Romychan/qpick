import { useCartStore } from '~/entities/Cart';

import { Counter } from '~/shared/ui/Counter';
import { formatPrice } from '~/shared/lib/utils';

import styles from './CounterCart.module.scss';

interface ICounterCartProps {
  /** The ID of the product to change the quantity in the cart */
  id: number;
  /** The default price of the item in the list */
  price: number;
  /** The quantity of product in the cart */
  quantity: number;
}

/** This component is used to display the current value and change the number of products in the cart */
export const CounterCart = ({ id, price, quantity }: ICounterCartProps) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className={styles.container}>
      <Counter
        count={quantity}
        onIncrement={() => increaseQuantity({ id })}
        onDecrement={() => decreaseQuantity({ id })}
      />

      <p className={styles.total} data-testid="cart-counter-total">
        {formatPrice(price * quantity)}
      </p>
    </div>
  );
};

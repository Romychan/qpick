import { CounterCart } from '~/features/CounterCart';
import { DeleteFromCart } from '~/features/DeleteFromCart';

import { useCartStore } from '~/entities/Cart';
import { ProductRow } from '~/entities/Product';

import styles from './CartList.module.scss';

/** This component is used to display the `<ProductRow />` as a cart list. */
export const CartList = () => {
  const { items: cart } = useCartStore();

  return (
    <div className={styles.container}>
      {cart.length ? (
        cart.map(({ quantity, product }) => (
          <ProductRow
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            actions={<DeleteFromCart id={product.id} />}
            bottomSlot={
              <CounterCart
                id={product.id}
                price={product.price}
                quantity={quantity}
              />
            }
          />
        ))
      ) : (
        <p className={styles.empty} data-testid="cart-empty">
          В корзине ничего нет
        </p>
      )}
    </div>
  );
};

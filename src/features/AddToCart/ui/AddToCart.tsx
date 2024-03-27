import { useCartStore } from '~/entities/Cart';
import { Product } from '~/entities/Product';

import { Button } from '~/shared/ui/Button';

import styles from './AddToCart.module.scss';

interface IAddToCartProps {
  /** Product to add to the cart */
  product: Product;
}

/** This component is used to allow users to add products to their shopping cart.  */
export const AddToCart = ({ product }: IAddToCartProps) => {
  const { addToCart } = useCartStore();

  return (
    <Button
      variant="link-primary"
      className={styles.button}
      onClick={() => addToCart(product)}
      data-testid="button-add-to-cart"
    >
      Купить
    </Button>
  );
};

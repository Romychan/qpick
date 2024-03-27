import { useCartStore } from '~/entities/Cart';

import { Button } from '~/shared/ui/Button';
import { Icon } from '~/shared/ui/Icon';

import styles from './DeleteFromCart.module.scss';

interface IDeleteFromCartProps {
  /** The ID of the product to be deleted from the cart */
  id: number;
}

/** This component is used to delete an item from the shopping cart */
export const DeleteFromCart = ({ id }: IDeleteFromCartProps) => {
  const { deleteFromCart } = useCartStore();

  return (
    <Button
      variant="link-primary"
      isIconOnly
      className={styles.button}
      onClick={() => deleteFromCart({ id })}
      aria-label="Удалить товар из корзины"
      title="Удалить"
      data-testid="button-delete-from-cart"
    >
      <Icon name="delete-filled" size={20} className={styles.icon} />
    </Button>
  );
};

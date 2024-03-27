import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useCartStore } from '~/entities/Cart';

import { Logo } from '~/shared/ui/Logo';
import { Badge } from '~/shared/ui/Badge';
import { Icon } from '~/shared/ui/Icon';
import { CART_ROUTE, FAVORITE_ROUTE, MAIN_ROUTE } from '~/shared/config';

import styles from './Header.module.scss';

/**
 * This component is used to display the header of a web page.
 * It contains a logo, a link with a cart and wish list icon.
 */
export const Header = () => {
  const { items: cart } = useCartStore();
  const countCartItems = useMemo(
    () => cart.reduce((acc, cur) => acc + cur.quantity, 0),
    [cart],
  );

  return (
    <header className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <Link to={MAIN_ROUTE}>
            <Logo />
          </Link>

          <div className={styles.items}>
            <Link
              to={FAVORITE_ROUTE}
              data-testid="header-favorite"
              aria-label="Перейти на страницу избранным товарам"
              title="Избранное"
              className={styles.link}
            >
              <Badge count={0} colorScheme="yellow">
                <Icon name="heart-filled" size={24} className={styles.icon} />
              </Badge>
            </Link>

            <Link
              to={CART_ROUTE}
              data-testid="header-cart"
              aria-label="Перейти на страницу корины товаров"
              title="Корзина"
              className={styles.link}
            >
              <Badge count={countCartItems} colorScheme="yellow">
                <Icon name="cart-filled" size={24} className={styles.icon} />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

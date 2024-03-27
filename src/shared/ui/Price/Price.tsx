import { SizeTypes } from '../../lib/types/ui';
import { cl } from '../../lib/utils';

import styles from './Price.module.scss';

interface IPriceProps {
  /** Price to display */
  price: number | string;
  /** The old price to display. If the value is empty, it is not displayed */
  oldPrice?: number | string | null;
  /** Additional class for the component */
  className?: string;
  /**
   * Currency code
   *
   * @default ''
   */
  currency?: string;
  /**
   * The direction of the menu items
   *
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * The size of the component
   *
   * @default 'md'
   */
  size?: SizeTypes;
}

/** This component can be used to display the price of products */
export const Price = ({
  price,
  oldPrice,
  currency = '',
  direction = 'horizontal',
  size = 'md',
  className,
}: IPriceProps) => {
  return (
    <div
      className={cl(
        styles.container,
        styles[direction],
        styles[size],
        className,
      )}
      data-testid="price"
    >
      <span className={styles.price}>
        {price} {currency}
      </span>
      {oldPrice ? (
        <span className={styles.old}>
          {oldPrice} {currency}
        </span>
      ) : null}
    </div>
  );
};

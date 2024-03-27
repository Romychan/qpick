import { ReactNode } from 'react';

import { formatPrice } from '~/shared/lib/utils';
import { Card } from '~/shared/ui/Card';

import { Product } from '../../model/types';

import styles from './ProductRow.module.scss';

interface IProductRowProps extends Omit<Product, 'rate'> {
  /** The bottom slot of the component for interactive elements */
  bottomSlot?: ReactNode;
  /** The slot of the component for interactive elements */
  actions?: ReactNode;
}

/** This component is used to get brief information about the product in the form of a row. */
export const ProductRow = ({
  title,
  image,
  price,
  bottomSlot,
  actions,
}: IProductRowProps) => {
  return (
    <Card className={styles.container} data-testid="product-row">
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={image} alt={title} width={150} height={150} />
        </div>

        <div className={styles.information}>
          <p className={styles.name}>{title}</p>
          <p className={styles.price}>{formatPrice(price)}</p>
        </div>
      </div>

      <div className={styles.row}>{bottomSlot}</div>

      <div className={styles.actions}>{actions}</div>
    </Card>
  );
};

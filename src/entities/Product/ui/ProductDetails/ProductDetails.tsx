import { ReactNode } from 'react';

import { formatPrice } from '~/shared/lib/utils';
import { Rating } from '~/shared/ui/Rating';
import { Price } from '~/shared/ui/Price';

import { Product } from '../../model/types';

import styles from './ProductDetails.module.scss';

interface IProductDetailsProps {
  /** A product for displaying detailed information */
  product: Product;
  /** The slot of the component for interactive elements */
  actions?: ReactNode;
}

/** This component is used to display detailed product information */
export const ProductDetails = ({ product, actions }: IProductDetailsProps) => {
  const { title, rate, description, price, oldPrice, image } = product;

  return (
    <div className={styles.container} data-testid="product-details">
      <div className={styles.image}>
        <img alt={title} src={image} width={250} height={270} />
      </div>

      <div className={styles.content}>
        <div className={styles.information}>
          <h1 className={styles.name}>{title}</h1>
          <Rating value={rate} />
        </div>

        <div className={styles.information}>
          <Price
            price={formatPrice(price)}
            oldPrice={formatPrice(oldPrice)}
            size="lg"
          />

          <div className={styles.actions}>{actions}</div>
        </div>

        <div className={styles.information}>
          <div className={styles.specification}>
            <p className={styles.subtitle}>Описание</p>
            <p className={styles.text}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Rating } from '~/shared/ui/Rating';
import { Card } from '~/shared/ui/Card';
import { OVERVIEW_ROUTE } from '~/shared/config';
import { Icon } from '~/shared/ui/Icon';
import { Price } from '~/shared/ui/Price';

import { Product } from '../../model/types';

import styles from './ProductCard.module.scss';

interface IProductCardProps extends Product {
  /** The slot of the component for interactive elements */
  actions?: ReactNode;
}

/** This component is used to get brief information about the product in the form of a card */
export const ProductCard = ({
  id,
  title,
  image,
  rate,
  price,
  oldPrice,
  actions,
}: IProductCardProps) => {
  return (
    <Card className={styles.container} data-testid="product-card">
      <Link
        to={`${OVERVIEW_ROUTE}/${id}`}
        aria-label="Быстрый просмотр товара"
        title="Быстрый просмотр"
        className={styles.link}
      >
        <Icon name="eye" size={22} />
      </Link>

      <div className={styles.image}>
        <img src={image} width={220} height={238} alt={title} />
      </div>

      <div className={styles.information}>
        <Link to={`${OVERVIEW_ROUTE}/${id}`} className={styles.name}>
          {title}
        </Link>

        <Price
          price={price}
          oldPrice={oldPrice}
          currency="₽"
          direction="vertical"
        />
      </div>

      <div className={styles.actions}>
        <Rating value={rate} />
        {actions}
      </div>
    </Card>
  );
};

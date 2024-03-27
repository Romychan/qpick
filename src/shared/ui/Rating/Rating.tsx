import { Icon } from '../Icon';

import styles from './Rating.module.scss';

interface IRatingProps {
  /** The value of the rating score */
  value: number;
}

/**
 * This component is used to display the rating of something.
 * For example, `<Rating />` can be placed at the product card to display user ratings.
 */
export const Rating = ({ value }: IRatingProps) => {
  return (
    <div className={styles.container} data-testid="rating">
      <Icon name="star-filled" size={24} className={styles.icon} />
      <p className={styles.text}>{value}</p>
    </div>
  );
};

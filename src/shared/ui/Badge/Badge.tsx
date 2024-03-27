import { ReactNode } from 'react';

import { cl } from '../../lib/utils';
import { ColorTypes } from '../../lib/types/ui';

import styles from './Badge.module.scss';

interface IBadgeProps {
  /** The color scheme of the component
   *
   * @default 'gray'
   */
  colorScheme?: ColorTypes;
  /** The number to display in the badge */
  count: number;
  /** The content of the component */
  children: ReactNode;
}

/**
 * This component is used to display numeric values above the component.
 * For example, a `Badge` can be placed near the cart icon to display the number of products.
 */
export const Badge = ({
  colorScheme = 'gray',
  count,
  children,
}: IBadgeProps) => {
  return (
    <div className={styles.container}>
      {children}

      {count > 0 ? (
        <span
          data-testid="badge-count"
          className={cl(styles.badge, styles[colorScheme])}
        >
          {count}
        </span>
      ) : null}
    </div>
  );
};

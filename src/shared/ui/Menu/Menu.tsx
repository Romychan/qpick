import { cl } from '../../lib/utils';

import { MenuItem } from './MenuItem/MenuItem';
import { MenuBaseProps, MenuWithChildren, MenuWithoutChildren } from './types';
import styles from './Menu.module.scss';

type IMenuProps = (MenuWithChildren | MenuWithoutChildren) & MenuBaseProps;

/** This component is used to display the menu list and navigation */
export const Menu = ({
  direction = 'horizontal',
  className,
  items,
  children,
}: IMenuProps) => {
  return (
    <nav className={cl(styles.container, styles[direction], className)}>
      <ul className={styles.list}>
        {children && !items
          ? children
          : items?.map(({ link, label }) => (
              <MenuItem key={link} link={link}>
                {label}
              </MenuItem>
            ))}
      </ul>
    </nav>
  );
};

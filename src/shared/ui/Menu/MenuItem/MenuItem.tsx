import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

import styles from './MenuItem.module.scss';

interface IMenuItemProps {
  /** Route link */
  link: string;
  /** The content of the component */
  children: ReactNode;
}

/** This component is used to display the menu item */
export const MenuItem = ({ children, link }: IMenuItemProps) => {
  return (
    <li className={styles.container} data-testid="menu-item">
      <Link className={styles.link} to={link}>
        {children}
      </Link>
    </li>
  );
};

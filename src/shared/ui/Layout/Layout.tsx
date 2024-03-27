import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

interface ILayoutProps {
  /** Slot for the layout header element */
  header?: ReactNode;
  /** Slot for the layout footer element */
  footer?: ReactNode;
}

/** This component is used to display the overall layout of the page */
export const Layout = ({ header, footer }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      {header}

      <main className={styles.main}>
        <div className="container">
          <div className={styles.inner}>
            <Outlet />
          </div>
        </div>
      </main>

      {footer}
    </div>
  );
};

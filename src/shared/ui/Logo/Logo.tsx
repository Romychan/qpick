import styles from './Logo.module.scss';

/** This component is used to display the current project logo */
export const Logo = () => {
  return (
    <div className={styles.container} data-testid="logo">
      <p className={styles.logo}>Qpick</p>
    </div>
  );
};

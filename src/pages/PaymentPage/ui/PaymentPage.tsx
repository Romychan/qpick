import { OrderForm } from '~/widgets/OrderForm';

import styles from './PaymentPage.module.scss';

/** This component is used to display the payment page */
export const PaymentPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оплата товара</h1>
      <OrderForm />
    </div>
  );
};

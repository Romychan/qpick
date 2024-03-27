import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CardPaymentForm } from '~/features/CardPaymentForm';
import { UserForm } from '~/features/UserForm';

import { PAYMENT_TYPES } from '~/entities/Payment';
import { CartSummary, useCartStore } from '~/entities/Cart';

import { Button } from '~/shared/ui/Button';
import { Card } from '~/shared/ui/Card';
import { RadioGroup } from '~/shared/ui/RadioGroup/RadioGroup';
import { useToast } from '~/shared/ui/Toast';

import { FormSchemaType } from '../model/types';
import { FormSchema } from '../model/schemas';

import styles from './OrderForm.module.scss';

/** This is the component of the form used to pay for the order */
export const OrderForm = () => {
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      payment: { type: 'card' },
    },
  });
  const { handleSubmit, control, watch, reset } = methods;

  const { items: cart, resetCart } = useCartStore();
  const { addToast } = useToast();

  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
    addToast({
      type: 'success',
      title: 'Заказ успешно оформлен',
      duration: 4000,
    });
    resetCart();
    reset({});
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <Card className={styles.item}>
            <h2 className={styles.title}>Покупатель</h2>
            <UserForm />
          </Card>

          <Card className={styles.item}>
            <h2 className={styles.title}>Способ оплаты</h2>
            <Controller
              name="payment.type"
              control={control}
              render={({ field: { value, onChange } }) => (
                <RadioGroup
                  selectedValue={value}
                  options={PAYMENT_TYPES}
                  onChange={onChange}
                />
              )}
            />

            {watch('payment.type') === 'card' ? <CardPaymentForm /> : null}
          </Card>
        </div>

        <div className={styles.checkout}>
          <CartSummary
            cart={cart}
            actions={
              <Button
                type="submit"
                size="lg"
                disabled={cart.length === 0}
                data-testid="order-button"
              >
                Заказать
              </Button>
            }
          />
        </div>
      </form>
    </FormProvider>
  );
};

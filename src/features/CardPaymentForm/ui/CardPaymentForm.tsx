import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '~/shared/ui/Input';
import { FormControl } from '~/shared/ui/FormControl';
import { formatCardNumber, formatExpiryDate } from '~/shared/lib/utils';

import styles from './CardPaymentForm.module.scss';

/** This is a component of the form for filling out information about a bank card */
export const CardPaymentForm = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.container} data-testid="card-payment">
      <Controller
        name="payment.card"
        control={control}
        render={({
          field: { name, value, onChange },
          fieldState: { error },
        }) => (
          <FormControl
            label="Номер карты"
            labelId={name}
            error={error?.message}
            required
          >
            <Input
              id={name}
              name={name}
              placeholder="1234 1234 1234 1234"
              value={formatCardNumber(value)}
              onChange={onChange}
              error={!!error}
              minLength={4}
              maxLength={19}
            />
          </FormControl>
        )}
      />

      <div className={styles.row}>
        <Controller
          name="payment.expiryDate"
          control={control}
          render={({
            field: { name, value, onChange },
            fieldState: { error },
          }) => (
            <FormControl
              label="Срок действия"
              labelId={name}
              error={error?.message}
              required
            >
              <Input
                id={name}
                name={name}
                placeholder="ММ/ГГ"
                value={formatExpiryDate(value)}
                onChange={onChange}
                error={!!error}
                minLength={5}
                maxLength={5}
              />
            </FormControl>
          )}
        />

        <Controller
          name="payment.cvv"
          control={control}
          defaultValue=""
          render={({
            field: { name, value, onChange },
            fieldState: { error },
          }) => (
            <FormControl
              label="CVC/CVV"
              labelId={name}
              error={error?.message}
              required
            >
              <Input
                id={name}
                name={name}
                type="password"
                placeholder="***"
                value={value}
                onChange={onChange}
                error={!!error}
                minLength={3}
                maxLength={3}
              />
            </FormControl>
          )}
        />
      </div>
    </div>
  );
};

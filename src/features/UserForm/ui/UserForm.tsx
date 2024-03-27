import { Controller, useFormContext } from 'react-hook-form';

import { FormControl } from '~/shared/ui/FormControl';
import { Input } from '~/shared/ui/Input';

import styles from './UserForm.module.scss';

/** This is a component of the form for filling out user information */
export const UserForm = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.container} data-testid="user-form">
      <Controller
        name="user.firstName"
        control={control}
        defaultValue=""
        render={({
          field: { name, value, onChange },
          fieldState: { error },
        }) => (
          <FormControl
            label="Имя"
            labelId={name}
            error={error?.message}
            required
          >
            <Input
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              error={!!error}
            />
          </FormControl>
        )}
      />

      <Controller
        name="user.secondName"
        control={control}
        defaultValue=""
        render={({
          field: { name, value, onChange },
          fieldState: { error },
        }) => (
          <FormControl
            label="Фамилия"
            labelId={name}
            error={error?.message}
            required
          >
            <Input
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              error={!!error}
            />
          </FormControl>
        )}
      />

      <Controller
        name="user.email"
        control={control}
        defaultValue=""
        render={({
          field: { name, value, onChange },
          fieldState: { error },
        }) => (
          <FormControl
            label="Email"
            labelId={name}
            error={error?.message}
            required
          >
            <Input
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              error={!!error}
            />
          </FormControl>
        )}
      />
    </div>
  );
};

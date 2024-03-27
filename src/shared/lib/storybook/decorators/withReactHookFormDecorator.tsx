import { Decorator } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

/** Wrapper decorator with `FormProvider` for components using hooks from `react-hook-form` */
export const withReactHookFormDecorator: Decorator = (Story) => {
  const StorybookFormProvider = ({ children }: PropsWithChildren) => {
    const methods = useForm();

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return (
    <StorybookFormProvider>
      <Story />
    </StorybookFormProvider>
  );
};

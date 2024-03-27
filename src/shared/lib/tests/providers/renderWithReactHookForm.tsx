import { PropsWithChildren, ReactElement } from 'react';
import { useForm, FormProvider, UseFormProps } from 'react-hook-form';
import { render } from '@testing-library/react';

/**
 * Wrapper function with `FormContext` for testing components using hooks from `react-hook-form`
 * @param ui React element that should be wrapped by the `FormContext`
 * @param params Optional arguments for `useHookForm`
 *
 * @returns A component wrapped in an `FormContext`
 */
export const renderWithReactHookForm = (
  ui: ReactElement,
  { defaultValues = {} } = {} as UseFormProps,
) => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    const methods = useForm({ defaultValues });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
  };
};

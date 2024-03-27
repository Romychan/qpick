import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

/**
 * Wrapper function with `MemoryRouter` for testing components using hooks from `react-router-dom`
 *
 * @param children React element that should be wrapped by the `MemoryRouter`
 * @param initialEntries Initial router entries for rendering in test
 *
 * @returns A component wrapped in an `MemoryRouter` and methods for working with it
 */
export const renderWithRouter = (
  children: ReactElement,
  initialEntries = '/',
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[initialEntries]}>{children}</MemoryRouter>,
    ),
  };
};

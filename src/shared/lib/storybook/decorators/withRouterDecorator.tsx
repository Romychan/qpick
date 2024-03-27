import { Decorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * Wrapper decorator with `MemoryRouter` for components using hooks from `react-router-dom`
 * The initial entries are set by the `parameters.initialEntries`. If no initial entries are specified, the default value is `['/']`
 */
export const withRouterDecorator: Decorator = (Story, context) => {
  const initialEntries = context.parameters.initialEntries ?? ['/'];

  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Story />
    </MemoryRouter>
  );
};

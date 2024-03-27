import { RenderResult, screen } from '@testing-library/react';

import { renderWithReactHookForm } from '~/shared/lib/tests';

import { UserForm } from './UserForm';

describe('UserForm', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithReactHookForm(<UserForm />);
  });

  it('should render correctly', () => {
    expect(screen.getAllByTestId('input-field')).toHaveLength(3);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

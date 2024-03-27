import { RenderResult, screen } from '@testing-library/react';

import { renderWithReactHookForm } from '~/shared/lib/tests';

import { CardPaymentForm } from './CardPaymentForm';

describe('CardPaymentForm', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithReactHookForm(<CardPaymentForm />);
  });

  it('should render correctly', () => {
    expect(screen.getAllByTestId('input-field')).toHaveLength(3);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

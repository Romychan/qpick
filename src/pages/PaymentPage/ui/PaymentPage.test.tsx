import { RenderResult, screen } from '@testing-library/react';

import { CartContextProvider } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';
import { ToastProvider } from '~/shared/ui/Toast';

import { PaymentPage } from './PaymentPage';

describe('PaymentPage', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithRouter(
      <ToastProvider>
        <CartContextProvider>
          <PaymentPage />
        </CartContextProvider>
      </ToastProvider>,
    );
  });

  it('should render correctly', () => {
    const userFormElement = screen.getByTestId('card-payment');
    const paymentFormElement = screen.getByTestId('user-form');
    const checkoutButtonElement = screen.getByTestId('order-button');

    expect(userFormElement).toBeInTheDocument;
    expect(paymentFormElement).toBeInTheDocument;
    expect(checkoutButtonElement).toBeInTheDocument;
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

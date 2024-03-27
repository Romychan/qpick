import { render, screen } from '@testing-library/react';

import { MOCK_CART } from '../../lib/mock';

import { CartSummary } from './CartSummary';

describe('CartSummary', () => {
  it('should render correctly', () => {
    render(<CartSummary cart={MOCK_CART} actions={<button>Actions</button>} />);

    const totalPriceElement = screen.getByTestId('checkout-total-price');
    const actionsElement = screen.getByRole('button');

    expect(totalPriceElement).toBeInTheDocument();
    expect(totalPriceElement).toHaveTextContent(/2 400/i);
    expect(actionsElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = render(
      <CartSummary cart={MOCK_CART} actions={<button>Actions</button>} />,
    );

    expect(container).toMatchSnapshot();
  });
});

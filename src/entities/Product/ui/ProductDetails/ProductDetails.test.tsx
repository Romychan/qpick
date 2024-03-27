import { RenderResult, render, screen } from '@testing-library/react';

import { MOCK_PRODUCTS } from '../../lib/mock';

import { ProductDetails } from './ProductDetails';

describe('ProductDetails', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <ProductDetails
        product={MOCK_PRODUCTS[0]}
        actions={<button>Actions</button>}
      />,
    );
  });

  it('should render correctly', () => {
    const nameElement = screen.getByText(/Apple/i);
    const ratingElement = screen.getByTestId('rating');
    const actionsElement = screen.getByRole('button');

    expect(nameElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(actionsElement).toBeInTheDocument();
  });

  it('should display the old price', () => {
    const oldPriceElement = screen.getByText(/3 527/i);

    expect(oldPriceElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

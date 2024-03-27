import { screen } from '@testing-library/react';

import { renderWithRouter } from '~/shared/lib/tests';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <ProductCard
        id={1}
        title="Test"
        image="./test.png"
        price={1200}
        rate={4.1}
        actions={<button>Actions</button>}
      />,
    );

    const nameElement = screen.getByText(/Test/i);
    const ratingElement = screen.getByTestId('rating');
    const actionsElement = screen.getByRole('button');

    expect(nameElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(actionsElement).toBeInTheDocument();
  });

  it('should display the old price', () => {
    renderWithRouter(
      <ProductCard
        id={1}
        title="Test"
        image="./test.png"
        price={1200}
        rate={4.1}
        oldPrice={1500}
        actions={<button>Actions</button>}
      />,
    );

    const oldPriceElement = screen.getByText(/1500/i);

    expect(oldPriceElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = renderWithRouter(
      <ProductCard
        id={1}
        title="Test"
        image="./test.png"
        price={1200}
        rate={4.1}
        oldPrice={1500}
        actions={<button>Actions</button>}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

import { screen, render } from '@testing-library/react';

import { Price } from './Price';

describe('Price', () => {
  it('should render correctly', () => {
    render(<Price price={1000} currency="$" />);
    const priceElement = screen.getByText('1000 $');
    const oldPriceElement = screen.queryByText('2000 $');

    expect(oldPriceElement).not.toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('should render correctly with old price', () => {
    render(<Price price={1000} oldPrice={2000} currency="$" />);
    const priceElement = screen.getByText('1000 $');
    const oldPriceElement = screen.getByText('2000 $');

    expect(oldPriceElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('should render correctly with size', () => {
    render(<Price price={1000} size="md" />);

    const priceElement = screen.getByTestId('price');

    expect(priceElement.getAttribute('class')).toMatch('md');
    expect(priceElement.getAttribute('class')).not.toMatch('xs');
  });

  it('should render correctly with direction', () => {
    render(<Price price={1000} direction="horizontal" />);

    const priceElement = screen.getByTestId('price');

    expect(priceElement.getAttribute('class')).toMatch('horizontal');
    expect(priceElement.getAttribute('class')).not.toMatch('vertical');
  });

  it('should match snapshot', () => {
    const container = render(
      <Price price={1000} oldPrice={2000} currency="$" />,
    );

    expect(container).toMatchSnapshot();
  });
});

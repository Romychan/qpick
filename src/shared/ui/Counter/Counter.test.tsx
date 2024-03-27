import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Counter } from './Counter';

describe('Counter', () => {
  it('should render correctly', () => {
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();
    render(
      <Counter
        count={3}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />,
    );
    const countElement = screen.getByText(/3/i);

    expect(countElement).toBeInTheDocument();
  });

  it('should handle the increase and decrease correctly', () => {
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();
    render(
      <Counter
        count={3}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />,
    );
    const incrementElement = screen.getByTestId('counter-increment');
    const decrementElement = screen.getByTestId('counter-decrement');

    fireEvent.click(incrementElement);
    expect(handleIncrement).toHaveBeenCalledTimes(1);

    fireEvent.click(decrementElement);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });

  it('should disable the increase button if the count is equal to the maximum value', () => {
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();
    render(
      <Counter
        count={10}
        max={10}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />,
    );
    const incrementElement = screen.getByTestId('counter-increment');

    fireEvent.click(incrementElement);
    expect(handleIncrement).toHaveBeenCalledTimes(0);
  });

  it('should disable the decrease button if the count is equal to the minimum value', () => {
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();
    render(
      <Counter
        count={1}
        min={1}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />,
    );
    const decrementElement = screen.getByTestId('counter-decrement');

    fireEvent.click(decrementElement);
    expect(handleDecrement).toHaveBeenCalledTimes(0);
  });

  it('should match snapshot', () => {
    const handleIncrement = vi.fn();
    const handleDecrement = vi.fn();
    const container = render(
      <Counter
        count={1}
        min={1}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Radio } from './Radio';

describe('Radio', () => {
  it('should render correctly', () => {
    render(<Radio />);
    const radioElement = screen.getByRole('radio');

    expect(radioElement).toBeInTheDocument();
  });

  it('should handle change value', () => {
    const handleChange = vi.fn();
    render(<Radio onChange={handleChange} />);

    const radioElement = screen.getByRole('radio');

    fireEvent.click(radioElement);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const handleChange = vi.fn();
    const container = render(<Radio onChange={handleChange} />);

    expect(container).toMatchSnapshot();
  });
});

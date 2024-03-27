import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { RadioGroup } from './RadioGroup';
import { MOCK_RADIO_ITEMS } from './__mocks__';

describe('RadioGroup', () => {
  it('should render correctly', () => {
    const handleChange = vi.fn();
    render(<RadioGroup options={MOCK_RADIO_ITEMS} onChange={handleChange} />);

    const groupElement = screen.getByTestId('radio-group');
    const itemsElement = screen.getAllByRole('radio');

    expect(groupElement).toBeInTheDocument();
    expect(itemsElement).toHaveLength(2);
  });

  it('should render correctly with direction', () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup
        direction="horizontal"
        options={MOCK_RADIO_ITEMS}
        onChange={handleChange}
      />,
    );

    const groupElement = screen.getByTestId('radio-group');

    expect(groupElement.getAttribute('class')).toMatch('horizontal');
    expect(groupElement.getAttribute('class')).not.toMatch('vertical');
  });

  it('should return the selected option correctly', () => {
    const handleChange = vi.fn();
    render(<RadioGroup options={MOCK_RADIO_ITEMS} onChange={handleChange} />);

    const itemElement = screen.getByRole('radio', { name: 'Item #1' });

    fireEvent.click(itemElement);

    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('should match snapshot', () => {
    const handleChange = vi.fn();
    const container = render(
      <RadioGroup options={MOCK_RADIO_ITEMS} onChange={handleChange} />,
    );

    expect(container).toMatchSnapshot();
  });
});

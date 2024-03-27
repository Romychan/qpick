import { render, screen } from '@testing-library/react';

import { Badge } from './Badge';

describe('Badge', () => {
  it('should render correctly', () => {
    render(<Badge count={1}>Badge</Badge>);
    const contentElement = screen.getByText(/Badge/i);
    const badgeElement = screen.getByTestId('badge-count');

    expect(badgeElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('should not be displayed if count is 0', () => {
    render(<Badge count={0}>Badge</Badge>);
    const contentElement = screen.getByText(/Badge/i);
    const badgeElement = screen.queryByTestId('badge-count');

    expect(badgeElement).not.toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('should render correctly with color scheme', () => {
    render(
      <Badge count={1} colorScheme="green">
        Badge
      </Badge>,
    );
    const badgeElement = screen.getByTestId('badge-count');

    expect(badgeElement.getAttribute('class')).toMatch('green');
    expect(badgeElement.getAttribute('class')).not.toMatch('gray');
  });

  it('should match snapshot', () => {
    const container = render(<Badge count={1}>Badge</Badge>);
    expect(container).toMatchSnapshot();
  });
});

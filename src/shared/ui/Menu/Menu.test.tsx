import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../lib/tests';

import { Menu } from './Menu';

const MOCK_MENU = [
  {
    link: '/link1',
    label: 'Link #1',
  },
  {
    link: '/link2',
    label: 'Link #2',
  },
  {
    link: '/link3',
    label: 'Link #3',
  },
];

describe('Menu', () => {
  it('should render correctly', () => {
    renderWithRouter(<Menu items={MOCK_MENU} />);

    const itemsElement = screen.getAllByTestId('menu-item');

    expect(itemsElement).toHaveLength(3);
  });

  it('should render correctly with direction', () => {
    renderWithRouter(<Menu direction="horizontal" items={MOCK_MENU} />);

    const navigationElement = screen.getByRole('navigation');

    expect(navigationElement.getAttribute('class')).toMatch('horizontal');
    expect(navigationElement.getAttribute('class')).not.toMatch('vertical');
  });

  it('should render correctly if items is empty, but there are children', () => {
    renderWithRouter(
      <Menu>
        <button>Test</button>
      </Menu>,
    );

    const itemElement = screen.queryByTestId('menu-item');
    const buttonElement = screen.getByRole('button', { name: 'Test' });

    expect(buttonElement).toBeInTheDocument();
    expect(itemElement).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = renderWithRouter(<Menu items={MOCK_MENU} />);

    expect(container).toMatchSnapshot();
  });
});

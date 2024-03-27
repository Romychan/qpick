import { RenderResult, screen } from '@testing-library/react';

import { renderWithRouter } from '../../../lib/tests';

import { MenuItem } from './MenuItem';

describe('MenuItem', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithRouter(<MenuItem link="/test">Test Link</MenuItem>);
  });

  it('should render correctly', () => {
    const itemElement = screen.getByTestId('menu-item');
    const linkElement = screen.getByText('Test Link');

    expect(itemElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

import { RenderResult, render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Logo />);
  });

  it('should render correctly', () => {
    const logoElement = screen.getByTestId('logo');

    expect(logoElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

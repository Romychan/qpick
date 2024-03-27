import { RenderResult, render, screen } from '@testing-library/react';

import { Rating } from './Rating';

describe('Rating', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Rating value={4.1} />);
  });

  it('should render correctly', () => {
    const ratingElement = screen.getByTestId('rating');
    const iconElement = screen.getByTestId('icon');

    expect(ratingElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

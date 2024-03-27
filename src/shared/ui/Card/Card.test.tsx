import { RenderResult, render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <Card>
        <button>Test</button>
      </Card>,
    );
  });

  it('should render correctly', () => {
    const childrenElement = screen.getByRole('button');

    expect(childrenElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

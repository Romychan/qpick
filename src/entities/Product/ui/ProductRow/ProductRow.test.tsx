import { RenderResult, screen } from '@testing-library/react';

import { renderWithRouter } from '~/shared/lib/tests';

import { ProductRow } from './ProductRow';

describe('ProductRow', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithRouter(
      <ProductRow
        id={1}
        title="Test"
        image="./test.png"
        price={1200}
        bottomSlot={<button>Bottom slot</button>}
        actions={<button>Actions</button>}
      />,
    );
  });

  it('should render correctly', () => {
    const centerRowSlotElement = screen.getByRole('button', {
      name: /Bottom/i,
    });
    const actionsElement = screen.getByRole('button', { name: /Actions/i });

    expect(centerRowSlotElement).toBeInTheDocument();
    expect(actionsElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

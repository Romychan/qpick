import { RenderResult, screen } from '@testing-library/react';

import { CartContextProvider } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';

import { Footer } from './Footer';

describe('Footer', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithRouter(
      <CartContextProvider>
        <Footer />
      </CartContextProvider>,
    );
  });

  it('should render correctly', () => {
    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

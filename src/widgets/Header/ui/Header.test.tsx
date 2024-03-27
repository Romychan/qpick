import { RenderResult, screen } from '@testing-library/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { renderWithRouter } from '~/shared/lib/tests';

import { Header } from './Header';

describe('Header', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithRouter(
      <CartContextProvider preloadState={{ items: MOCK_CART }}>
        <Header />
      </CartContextProvider>,
    );
  });

  it('should render correctly', () => {
    const logoElement = screen.getByTestId('logo');
    const cartElement = screen.getByTestId('header-cart');
    const favoriteElement = screen.getByTestId('header-favorite');

    expect(logoElement).toBeInTheDocument();
    expect(cartElement).toBeInTheDocument();
    expect(cartElement).toHaveTextContent('2');
    expect(favoriteElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

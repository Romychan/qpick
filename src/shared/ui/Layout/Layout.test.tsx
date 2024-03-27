import { RenderResult, render, screen } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <Layout
        header={<header>Header</header>}
        footer={<footer>Footer</footer>}
      />,
    );
  });

  it('should render correctly', () => {
    const headerElement = screen.getByText(/Header/i);
    const footerElement = screen.getByText(/Footer/i);

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

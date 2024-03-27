import { RenderResult, render, screen } from '@testing-library/react';

import { FooterSocial } from './FooterSocial';

describe('FooterSocial', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<FooterSocial />);
  });

  it('should render correctly', () => {
    const socialsElement = screen.getAllByTestId('icon');

    expect(socialsElement).toHaveLength(3);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

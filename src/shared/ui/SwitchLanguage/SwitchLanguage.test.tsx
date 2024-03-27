import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { SwitchLanguage } from './SwitchLanguage';

const MOCK_LANGUAGES = [
  {
    value: 'ru',
    label: 'RU',
  },
  {
    value: 'en',
    label: 'EN',
  },
];

describe('SwitchLanguage', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<SwitchLanguage languages={MOCK_LANGUAGES} />);
  });

  it('should render correctly', () => {
    const buttonElement = screen.getAllByTestId('language-button');

    expect(buttonElement).toHaveLength(2);
  });

  it('should switch languages correctly', () => {
    const buttonFirstElement = screen.getByRole('button', { name: 'RU' });
    const buttonSecondElement = screen.getByRole('button', { name: 'EN' });

    expect(buttonFirstElement.getAttribute('class')).toMatch('active');
    expect(buttonSecondElement.getAttribute('class')).not.toMatch('active');

    fireEvent.click(buttonSecondElement);

    expect(buttonFirstElement.getAttribute('class')).not.toMatch('active');
    expect(buttonSecondElement.getAttribute('class')).toMatch('active');
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});

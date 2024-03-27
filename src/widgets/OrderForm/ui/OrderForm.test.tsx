import {
  RenderResult,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { CartContextProvider } from '~/entities/Cart';

import { ToastProvider } from '~/shared/ui/Toast';

import { OrderForm } from './OrderForm';

describe('OrderForm', () => {
  describe('Default display of the component', () => {
    let container: RenderResult;

    beforeEach(() => {
      container = render(
        <ToastProvider>
          <CartContextProvider>
            <OrderForm />
          </CartContextProvider>
        </ToastProvider>,
      );
    });

    it('should render correctly', () => {
      expect(screen.getAllByTestId('input-field')).toHaveLength(6);
      expect(screen.queryAllByRole('alert')).toHaveLength(0);
      expect(screen.getByTestId('order-button')).toBeInTheDocument();
    });

    it('should switch payment correctly', () => {
      expect(screen.getByTestId('card-payment')).toBeInTheDocument();

      const cashRadioElement = screen.getByRole('radio', { name: 'Наличные' });
      fireEvent.click(cashRadioElement);

      expect(screen.queryByTestId('card-payment')).not.toBeInTheDocument();

      const bankRadioElement = screen.getByRole('radio', {
        name: 'Банковская карта',
      });
      fireEvent.click(bankRadioElement);

      expect(screen.queryByTestId('card-payment')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('Displaying a component with a card payment form', () => {
    let container: RenderResult;

    beforeEach(() => {
      container = render(
        <ToastProvider>
          <CartContextProvider>
            <OrderForm />
          </CartContextProvider>
        </ToastProvider>,
      );
    });

    it('should display an error if not all fields have been filled in', async () => {
      fillUserForm();
      fillCardForm();

      fireEvent.change(screen.getByRole('textbox', { name: /Имя/i }), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByRole('textbox', { name: /Номер карты/i }), {
        target: { value: '' },
      });

      fireEvent.submit(screen.getByTestId('order-button'));

      expect(await screen.findAllByRole('alert')).toHaveLength(2);
    });

    it('should display matching error when card number and email is invalid', async () => {
      fillUserForm();
      fillCardForm();

      fireEvent.change(screen.getByRole('textbox', { name: /Email/i }), {
        target: { value: '123' },
      });

      fireEvent.change(screen.getByRole('textbox', { name: /Номер карты/i }), {
        target: { value: 'Test' },
      });

      fireEvent.submit(screen.getByTestId('order-button'));

      expect(await screen.findAllByRole('alert')).toHaveLength(2);
    });

    it('should not display error when value is valid', async () => {
      fillUserForm();
      fillCardForm();

      fireEvent.submit(screen.getByTestId('order-button'));

      await waitFor(() =>
        expect(screen.queryAllByRole('alert')).toHaveLength(0),
      );
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('Displaying a component with a cash payment form', () => {
    let container: RenderResult;

    beforeEach(() => {
      container = render(
        <ToastProvider>
          <CartContextProvider>
            <OrderForm />
          </CartContextProvider>
        </ToastProvider>,
      );
    });

    it('should display an error if not all fields have been filled in', async () => {
      fillUserForm();

      fireEvent.click(screen.getByRole('radio', { name: 'Наличные' }));
      fireEvent.submit(screen.getByTestId('order-button'));

      await waitFor(() =>
        expect(screen.queryAllByRole('alert')).toHaveLength(0),
      );
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});

const fillUserForm = () => {
  fireEvent.change(screen.getByRole('textbox', { name: /Имя/i }), {
    target: { value: 'First Name' },
  });
  fireEvent.change(screen.getByRole('textbox', { name: /Фамилия/i }), {
    target: { value: 'Second Name' },
  });
  fireEvent.change(screen.getByRole('textbox', { name: /Email/i }), {
    target: { value: 'test@test.test' },
  });
};

const fillCardForm = () => {
  fireEvent.change(screen.getByRole('textbox', { name: /Номер карты/i }), {
    target: { value: '1234 5678 1234 5678' },
  });
  fireEvent.change(screen.getByRole('textbox', { name: /Срок действия/i }), {
    target: { value: '01/02' },
  });
  fireEvent.change(screen.getByPlaceholderText('***'), {
    target: { value: '123' },
  });
};

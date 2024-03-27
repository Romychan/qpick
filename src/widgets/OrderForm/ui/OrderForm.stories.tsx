import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { ToastProvider } from '~/shared/ui/Toast';

import { OrderForm } from './OrderForm';

const meta = {
  title: 'Widgets/OrderForm',
  component: OrderForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof OrderForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <CartContextProvider preloadState={{ items: MOCK_CART }}>
          <Story />
        </CartContextProvider>
      </ToastProvider>
    ),
  ],
};

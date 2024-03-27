import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider } from '~/entities/Cart';

import { withRouterDecorator } from '~/shared/lib/storybook';
import { ToastProvider } from '~/shared/ui/Toast';

import { PaymentPage } from './PaymentPage';

const meta = {
  title: 'Pages/PaymentPage',
  component: PaymentPage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    withRouterDecorator,
    (Story) => (
      <ToastProvider>
        <CartContextProvider>
          <Story />
        </CartContextProvider>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof PaymentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

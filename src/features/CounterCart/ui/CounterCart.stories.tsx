import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { CounterCart } from './CounterCart';

const meta = {
  title: 'Features/CounterCart',
  component: CounterCart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <CartContextProvider preloadState={{ items: MOCK_CART }}>
        <Story />
      </CartContextProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CounterCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: MOCK_CART[0].product.id,
    price: MOCK_CART[0].product.price,
    quantity: MOCK_CART[0].quantity,
  },
};

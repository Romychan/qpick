import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider } from '~/entities/Cart';
import { MOCK_PRODUCTS } from '~/entities/Product';

import { AddToCart } from './AddToCart';

const meta = {
  title: 'Features/AddToCart',
  component: AddToCart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <CartContextProvider>
        <Story />
      </CartContextProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AddToCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: MOCK_PRODUCTS[0],
  },
};

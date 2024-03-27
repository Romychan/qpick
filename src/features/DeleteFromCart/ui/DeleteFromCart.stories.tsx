import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider } from '~/entities/Cart';

import { DeleteFromCart } from './DeleteFromCart';

const meta = {
  title: 'Features/DeleteFromCart',
  component: DeleteFromCart,
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
} satisfies Meta<typeof DeleteFromCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
  },
};

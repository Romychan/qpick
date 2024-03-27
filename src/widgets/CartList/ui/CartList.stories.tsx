import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { withRouterDecorator } from '~/shared/lib/storybook';

import { CartList } from './CartList';

const meta = {
  title: 'Widgets/CartList',
  component: CartList,
  tags: ['autodocs'],
  decorators: [withRouterDecorator],
} satisfies Meta<typeof CartList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default */
export const Default: Story = {
  decorators: [
    (Story) => (
      <CartContextProvider preloadState={{ items: MOCK_CART }}>
        <Story />
      </CartContextProvider>
    ),
  ],
};

/** If the cart list is empty, this state is displayed */
export const Empty: Story = {
  decorators: [
    (Story) => (
      <CartContextProvider preloadState={{ items: [] }}>
        <Story />
      </CartContextProvider>
    ),
  ],
};

import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider, MOCK_CART } from '~/entities/Cart';

import { withRouterDecorator } from '~/shared/lib/storybook';

import { Header } from './Header';

const meta = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    withRouterDecorator,
    (Story) => (
      <CartContextProvider preloadState={{ items: MOCK_CART }}>
        <Story />
      </CartContextProvider>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider } from '~/entities/Cart';

import { withRouterDecorator } from '~/shared/lib/storybook';

import { CatalogPage } from './CatalogPage';

const meta = {
  title: 'Pages/CatalogPage',
  component: CatalogPage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    withRouterDecorator,
    (Story) => (
      <CartContextProvider>
        <Story />
      </CartContextProvider>
    ),
  ],
} satisfies Meta<typeof CatalogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

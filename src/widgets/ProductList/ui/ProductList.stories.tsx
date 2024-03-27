import type { Meta, StoryObj } from '@storybook/react';

import { CartContextProvider } from '~/entities/Cart';
import { MOCK_PRODUCTS } from '~/entities/Product';

import { withRouterDecorator } from '~/shared/lib/storybook';

import { ProductList } from './ProductList';

const meta = {
  title: 'Widgets/ProductList',
  component: ProductList,
  tags: ['autodocs'],
  decorators: [
    withRouterDecorator,
    (Story) => (
      <CartContextProvider>
        <Story />
      </CartContextProvider>
    ),
  ],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default */
export const Default: Story = {
  args: {
    title: 'Products',
    products: MOCK_PRODUCTS,
  },
};

/** A component without a title */
export const WithoutTitle: Story = {
  args: {
    products: MOCK_PRODUCTS,
  },
};

/** If the product list is empty, this state is displayed */
export const Empty: Story = {
  args: {
    title: 'Products',
    products: [],
  },
};

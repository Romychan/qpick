import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/shared/ui/Button';
import {
  withRouterDecorator,
  withWidthDecorator,
} from '~/shared/lib/storybook';

import { MOCK_PRODUCTS } from '../../lib/mock';

import { ProductDetails } from './ProductDetails';

const meta = {
  title: 'Entities/Product/ProductDetails',
  component: ProductDetails,
  parameters: {
    layout: 'centered',
    width: '540px',
  },
  args: {
    product: MOCK_PRODUCTS[0],
  },
  decorators: [withRouterDecorator, withWidthDecorator],
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default */
export const Default: Story = {
  args: {
    actions: <Button>Actions Slot</Button>,
  },
};

/** Component without actions slot */
export const EmptySlots: Story = {
  args: {
    actions: null,
  },
};

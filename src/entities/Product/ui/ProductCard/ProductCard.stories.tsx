import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/shared/ui/Button';
import {
  withRouterDecorator,
  withWidthDecorator,
} from '~/shared/lib/storybook';

import { ProductCard } from './ProductCard';

const meta = {
  title: 'Entities/Product/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    width: '330px',
  },
  args: {
    id: 1,
    title: 'Product Name',
    image: './images/catalog/headphone-1.png',
    price: 1200,
    rate: 4.2,
  },
  decorators: [withRouterDecorator, withWidthDecorator],
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default */
export const Default: Story = {
  args: {
    actions: <Button>Actions Slot</Button>,
  },
};

/** This state is used to display the component with old and new price */
export const OldPrice: Story = {
  args: {
    oldPrice: 1600,
    actions: <Button>Actions Slot</Button>,
  },
};

/** Component without actions slot */
export const EmptySlots: Story = {
  args: {
    actions: null,
  },
};

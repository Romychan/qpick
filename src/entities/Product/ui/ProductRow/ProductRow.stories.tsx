import type { Meta, StoryObj } from '@storybook/react';

import {
  withRouterDecorator,
  withWidthDecorator,
} from '~/shared/lib/storybook';
import { Button, Default as DefaultButton } from '~/shared/ui/Button';

import { ProductRow } from './ProductRow';

const meta = {
  title: 'Entities/Product/ProductRow',
  component: ProductRow,
  parameters: {
    layout: 'centered',
    width: '540px',
  },
  args: {
    id: 1,
    title: 'Product Name',
    image: './images/catalog/headphone-1.png',
    price: 1200,
  },
  decorators: [withRouterDecorator, withWidthDecorator],
  tags: ['autodocs'],
} satisfies Meta<typeof ProductRow>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default. */
export const Default: Story = {
  args: {
    bottomSlot: 'Bottom Slot',
    actions: <Button {...DefaultButton.args}>Actions</Button>,
  },
};

/** Component without bottom and actions slot */
export const EmptySlots: Story = {
  args: {},
};

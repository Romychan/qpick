import type { Meta, StoryObj } from '@storybook/react';

import {
  withRouterDecorator,
  withWidthDecorator,
} from '~/shared/lib/storybook';
import { Button, Default as DefaultButton } from '~/shared/ui/Button';

import { MOCK_CART } from '../../lib/mock';

import { CartSummary } from './CartSummary';

const meta = {
  title: 'Entities/Cart/CartSummary',
  component: CartSummary,
  parameters: {
    layout: 'centered',
    width: '350px',
  },
  args: {
    cart: MOCK_CART,
  },
  decorators: [withRouterDecorator, withWidthDecorator],
  tags: ['autodocs'],
} satisfies Meta<typeof CartSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: <Button {...DefaultButton.args}>Оформить</Button>,
  },
};

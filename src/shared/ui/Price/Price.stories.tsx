import type { Meta, StoryObj } from '@storybook/react';

import { withGapDecorator, withRouterDecorator } from '../../lib/storybook';

import { Price } from './Price';

const meta = {
  title: 'UI/Price',
  component: Price,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouterDecorator],
  args: {
    price: 1000,
    oldPrice: 2000,
    currency: '$',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default */
export const Default: Story = {
  args: {
    oldPrice: null,
  },
};

/** If the `oldPrice` property is not empty, the value will be displayed */
export const OldPrice: Story = {};

/**
 * The `direction` property is used to change the direction of positions Price.
 * - `horizontal` is used to direction price items horizontally
 * - `vertical` is used to direction price items vertically
 */
export const Variants: Story = {
  decorators: [withGapDecorator],
  render: (args) => {
    return (
      <>
        <Price {...args} direction="horizontal" />
        <Price {...args} direction="vertical" />
      </>
    );
  },
};

/**
 * The `size` property is used to change the size of the price.
 * - `lg` can be used to display important items on the screen
 * - `md` is the main one for performing basic operations
 * - `sm` can be used to perform operations, depending on the context
 * - `xs` is used to perform minor or secondary operations
 */
export const AllSizes: Story = {
  decorators: [withGapDecorator],
  args: {
    direction: 'vertical',
  },
  render: (args) => {
    return (
      <>
        <Price {...args} size="lg" />
        <Price {...args} size="md" />
        <Price {...args} size="sm" />
        <Price {...args} size="xs" />
      </>
    );
  },
};

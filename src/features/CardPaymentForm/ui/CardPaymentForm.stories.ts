import type { Meta, StoryObj } from '@storybook/react';

import { withReactHookFormDecorator } from '~/shared/lib/storybook';

import { CardPaymentForm } from './CardPaymentForm';

const meta = {
  title: 'Features/CardPaymentForm',
  component: CardPaymentForm,
  tags: ['autodocs'],
  decorators: [withReactHookFormDecorator],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CardPaymentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

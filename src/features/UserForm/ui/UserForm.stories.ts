import type { Meta, StoryObj } from '@storybook/react';

import { withReactHookFormDecorator } from '~/shared/lib/storybook/decorators/withReactHookFormDecorator';

import { UserForm } from './UserForm';

const meta = {
  title: 'Features/UserForm',
  component: UserForm,
  tags: ['autodocs'],
  decorators: [withReactHookFormDecorator],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof UserForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

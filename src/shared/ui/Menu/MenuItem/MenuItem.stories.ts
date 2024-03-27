import type { Meta, StoryObj } from '@storybook/react';

import { withRouterDecorator } from '../../../lib/storybook';

import { MenuItem } from './MenuItem';

const meta = {
  title: 'UI/Menu/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouterDecorator],

  tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: '/',
    children: 'Link',
  },
};

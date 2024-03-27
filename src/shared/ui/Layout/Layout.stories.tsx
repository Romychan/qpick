import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';

const meta = {
  title: 'UI/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: <header>Header</header>,
    footer: <footer>Footer</footer>,
  },
};

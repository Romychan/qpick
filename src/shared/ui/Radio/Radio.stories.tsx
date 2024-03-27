import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta = {
  title: 'UI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};

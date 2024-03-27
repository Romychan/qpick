import type { Meta, StoryObj } from '@storybook/react';

import { SwitchLanguage } from './SwitchLanguage';

const meta = {
  title: 'UI/SwitchLanguage',
  component: SwitchLanguage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchLanguage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    languages: [
      {
        value: 'ru',
        label: 'RU',
      },
      {
        value: 'en',
        label: 'EN',
      },
    ],
  },
};

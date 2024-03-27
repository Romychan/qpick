import type { Meta, StoryObj } from '@storybook/react';

import { FooterSocial } from './FooterSocial';

const meta = {
  title: 'Widgets/Footer/FooterSocial',
  component: FooterSocial,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

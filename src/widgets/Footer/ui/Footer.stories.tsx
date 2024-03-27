import type { Meta, StoryObj } from '@storybook/react';

import { withRouterDecorator } from '~/shared/lib/storybook';

import { Footer } from './Footer';

const meta = {
  title: 'Widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [withRouterDecorator],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import { withGapDecorator } from '../../lib/storybook';

import { Badge } from './Badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Badge',
    count: 1,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default. */
export const Default: Story = {
  args: {
    colorScheme: 'gray',
  },
};

/**
 * The `colorScheme` property is used to change the color scheme of the badge.
 * - `gray` is used for pending status
 * - `red` is used for error status.
 * - `green` is used for success status.
 * - `yellow` is used for warning status
 */
export const AllColorSchemes: Story = {
  decorators: [withGapDecorator],
  render: (args) => {
    return (
      <>
        <Badge {...args} colorScheme="gray">
          Pending
        </Badge>
        <Badge {...args} colorScheme="green">
          Success
        </Badge>
        <Badge {...args} colorScheme="yellow">
          Warning
        </Badge>
        <Badge {...args} colorScheme="red">
          Error
        </Badge>
      </>
    );
  },
};

/** If the counter value is 0, the badge component will not be displayed */
export const Empty: Story = {
  args: {
    colorScheme: 'gray',
    count: 0,
  },
};

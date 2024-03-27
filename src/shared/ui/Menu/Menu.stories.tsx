import type { Meta, StoryObj } from '@storybook/react';

import { withGapDecorator, withRouterDecorator } from '../../lib/storybook';

import { Menu } from './Menu';

const meta = {
  title: 'UI/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouterDecorator],
  args: {
    items: [
      {
        link: '/link1',
        label: 'Link #1',
      },
      {
        link: '/link2',
        label: 'Link #2',
      },
      {
        link: '/link3',
        label: 'Link #3',
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default */
export const Default: Story = {};

/**
 * The `direction` property is used to change the direction of positions menu.
 * - `horizontal` is used to direction menu items horizontally
 * - `vertical` is used to direction menu items vertically
 */
export const Variants: Story = {
  decorators: [withGapDecorator],
  render: (args) => {
    return (
      <>
        <Menu {...args} direction="horizontal" />
        <Menu {...args} direction="vertical" />
      </>
    );
  },
};

/** To display custom elements, make the list of menu items empty and pass custom elements as children */
export const CustomElements: Story = {
  decorators: [withGapDecorator],
  render: (args) => {
    return (
      <>
        <Menu {...args} items={undefined}>
          <p>Element #1</p>
          <p>Element #2</p>
          <p>Element #3</p>
        </Menu>
      </>
    );
  },
};

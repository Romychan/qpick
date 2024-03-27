import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { withGapDecorator, withWidthDecorator } from '../../lib/storybook';

import { RadioGroup } from './RadioGroup';
import { MOCK_RADIO_ITEMS } from './__mocks__';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Radio/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: MOCK_RADIO_ITEMS,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/** This state is used to default. */
export const Default: Story = {
  decorators: [withWidthDecorator],
  args: {
    selectedValue: '1',
  },
  render: function Render(args) {
    const [{ selectedValue }, updateArgs] = useArgs();

    const handleChange = (value: string) => {
      action('onChange')(value);
      updateArgs({ selectedValue: value });
    };

    return (
      <RadioGroup
        {...args}
        selectedValue={selectedValue}
        onChange={handleChange}
      />
    );
  },
};

/**
 * The `direction` property is used to change the direction of positions radio items.
 * - `horizontal` is used to direction radio items horizontally
 * - `vertical` is used to direction radio items vertically
 */
export const Variants: Story = {
  decorators: [withGapDecorator],
  render: (args) => {
    return (
      <>
        <RadioGroup {...args} direction="horizontal" />
        <RadioGroup {...args} direction="vertical" />
      </>
    );
  },
};

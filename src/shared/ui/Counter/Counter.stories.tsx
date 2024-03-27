import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'UI/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onDecrement: { action: 'onDecrement' },
    onIncrement: { action: 'onIncrement' },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    count: 3,
  },
  render: function Render(args) {
    const [{ count }, updateArgs] = useArgs();

    const handleChange = (
      value: number,
      actions: 'onIncrement' | 'onDecrement',
    ) => {
      action(actions)(value);
      updateArgs({ count: value });
    };

    return (
      <Counter
        {...args}
        count={count}
        onIncrement={(value) => handleChange(value, 'onIncrement')}
        onDecrement={(value) => handleChange(value, 'onDecrement')}
      />
    );
  },
};

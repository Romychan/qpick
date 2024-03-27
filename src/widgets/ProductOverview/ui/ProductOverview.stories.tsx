import type { Meta, StoryObj } from '@storybook/react';
import { Route, Routes } from 'react-router-dom';

import { CartContextProvider } from '~/entities/Cart';

import {
  withHeightDecorator,
  withRouterDecorator,
} from '~/shared/lib/storybook';
import { OVERVIEW_ROUTE } from '~/shared/config';

import { ProductOverview } from './ProductOverview';

const meta = {
  title: 'Widgets/ProductOverview',
  component: ProductOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    initialEntries: [`${OVERVIEW_ROUTE}/1`],
    height: '75vh',
  },
  decorators: [
    (Story) => (
      <Routes>
        <Route
          path={`${OVERVIEW_ROUTE}/:productId`}
          element={
            <CartContextProvider>
              <Story />
            </CartContextProvider>
          }
        />
      </Routes>
    ),
    withHeightDecorator,
    withRouterDecorator,
  ],
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

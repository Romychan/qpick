import type { Preview } from '@storybook/react';

import '../src/app/assets/styles/style.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Pages', 'Widgets', 'Features', 'Entities', 'UI'],
      },
    },
  },
};

export default preview;

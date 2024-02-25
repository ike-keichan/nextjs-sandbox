import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import 'the-new-css-reset/css/reset.css';

import { GlobalStyles } from '../src/shared/styles/GlobalStyles';

import type { Preview } from '@storybook/nextjs';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

export default preview;

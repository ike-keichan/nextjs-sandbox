import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import 'the-new-css-reset/css/reset.css';

import { GlobalStyle } from '../src/shared/styles/GlobalStyle';

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
    GlobalStyle,
  }),
];

export default preview;

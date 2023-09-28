import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/theme'
import {themes} from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ]
  },
  docs: {
    theme: themes.dark,
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];

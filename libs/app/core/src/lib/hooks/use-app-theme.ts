import { createMuiTheme, ThemeOptions, useMediaQuery } from '@material-ui/core';
import { blue, grey, lightBlue, pink } from '@material-ui/core/colors';
import { deDE, enUS } from '@material-ui/core/locale';
import { useSettingsState } from '../hooks/use-settings-state';
import { Language } from '../models/language';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    mobile: true;
  }
}

enum Appearance {
  Light = 'Light',
  Dark = 'Dark',
}

export const useAppTheme = () => {
  const prefersColorSchemeDark = useMediaQuery('(prefers-color-scheme: dark)');
  const {
    settings: { autoDarkMode, darkMode, currentLanguage },
  } = useSettingsState();
  const useDarkMode = autoDarkMode ? prefersColorSchemeDark : darkMode;
  
  return THEMES[currentLanguage][
    useDarkMode ? Appearance.Dark : Appearance.Light
  ];
};

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 420,
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
};

const lightTheme = createMuiTheme({
  ...baseThemeOptions,
  ...{
    palette: {
      type: 'light',
      primary: {
        main: blue[700],
        light: lightBlue[700],
      },
      secondary: {
        main: pink[700],
      },
      background: { default: grey[50] },
    },
  },
});

const darkTheme = createMuiTheme({
  ...baseThemeOptions,
  ...{
    palette: {
      type: 'dark',
      primary: {
        main: blue[200],
        light: lightBlue[500][700],
      },
      secondary: {
        main: pink[200],
      },
      background: { default: grey[900] },
    },
  },
});

const THEMES = {
  [Language.English]: {
    [Appearance.Light]: createMuiTheme(lightTheme, enUS),
    [Appearance.Dark]: createMuiTheme(darkTheme, enUS),
  },
  [Language.German]: {
    [Appearance.Light]: createMuiTheme(lightTheme, deDE),
    [Appearance.Dark]: createMuiTheme(darkTheme, deDE),
  },
};

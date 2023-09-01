import { DefaultMantineColor, Tuple } from '@mantine/core';

type ExtendedCustomColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent1'
  | 'accent2'
  | 'light'
  | 'dark'
  | 'darkText'
  | 'white'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

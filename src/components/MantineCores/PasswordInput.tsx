import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps,
  useMantineTheme,
} from '@mantine/core';

import IconLock from '../../assets/Icon/IconLock';

export default function PasswordInput({ ...props }: PasswordInputProps) {
  const theme = useMantineTheme();

  return (
    <MantinePasswordInput
      {...props}
      visibilityToggleIcon={({ reveal }) => (reveal ? <IconLock /> : <IconLock />)}
      styles={{
        label: {
          color: theme.colors.darkText[1],
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '24px',

          marginBottom: 4,
        },

        required: {
          color: theme.colors.red,
        },

        error: {
          color: theme.colors.red,

          fontWeight: 400,
          fontSize: 12,
          lineHeight: '16px',

          marginTop: 4,

          width: 'fit-content',
        },

        input: {
          padding: 0,
          height: 64,
          border: `1px solid ${theme.colors.light[1]}`,
          borderRadius: 20,

          ':focus-within': {
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        innerInput: {
          height: '100%',
          padding: '16px 16px 16px 68px',
          color: theme.colors.darkText[0],
          fontSize: 20,
          fontWeight: 600,
          lineHeight: '32px',

          '::placeholder': {
            color: theme.colors.darkText[1],
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '32px',
          },
        },

        rightSection: {
          width: 32,
          left: 16,
          color: theme.colors.darkText[0],

          svg: {
            width: '32px !important',
            height: '32px !important',
          },
        },

        visibilityToggle: {
          width: 32,
          height: 32,
          border: 'none',
        },
      }}
    />
  );
}

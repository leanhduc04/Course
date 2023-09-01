import { TextInput as MantineTextInput, TextInputProps, useMantineTheme } from '@mantine/core';

export default function TextInput({ ...props }: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <MantineTextInput
      {...props}
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
          color: theme.colors.darkText[0],

          height: 64,
          padding: 16,
          border: `1px solid ${theme.colors.light[1]}`,
          borderRadius: 20,
          fontSize: 20,
          fontWeight: 600,
          lineHeight: '32px',

          '&[data-with-icon]': {
            paddingLeft: 68,
          },

          '::placeholder': {
            color: theme.colors.darkText[1],
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '32px',
          },

          ':focus-within': {
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        icon: {
          width: 32,
          marginLeft: 16,
          color: theme.colors.darkText[0],

          svg: {
            width: 32,
            height: 32,
          },
        },
      }}
    />
  );
}

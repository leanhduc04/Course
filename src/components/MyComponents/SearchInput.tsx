import { TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import IconSearch from '../../assets/Icon/IconSearch';

export default function SearchInput({ ...props }: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      {...props}
      styles={{
        input: {
          color: theme.colors.darkText[0],

          width: 410,
          height: 48,
          padding: 12,
          border: `1px solid ${theme.colors.light[1]}`,
          borderRadius: 16,
          fontSize: 14,
          fontWeight: 600,
          lineHeight: '24px',

          '&[data-with-icon]': {
            paddingLeft: 48,
          },

          '::placeholder': {
            color: theme.colors.darkText[1],
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '24px',
          },

          ':focus-within': {
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        icon: {
          width: 24,
          marginLeft: 12,
          color: theme.colors.darkText[0],

          svg: {
            width: 24,
            height: 24,
          },
        },
      }}
      icon={<IconSearch />}
      placeholder="Search"
    />
  );
}

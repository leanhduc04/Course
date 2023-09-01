import { Chip as MantineChip, ChipProps, useMantineTheme } from '@mantine/core';

interface chipProps extends ChipProps {
  color: string;
}

export default function Chip({ color, ...props }: chipProps) {
  const theme = useMantineTheme();

  return (
    <MantineChip
      {...props}
      styles={{
        root: {
          width: 'fit-content',
          height: 64,

          display: 'flex',
        },

        label: {
          background: 'transparent',
          color: theme.colors.darkText[1],

          height: 64,

          display: 'flex',
          justifyContent: 'center',

          paddingLeft: 12,
          paddingRight: 12,

          fontWeight: 400,
          fontSize: 20,
          lineHeight: '24px',

          borderRadius: 20,
          border: `1px solid ${theme.colors.light[1]}`,

          ...theme.fn.hover({
            background: 'transparent',
          }),

          '&[data-checked]': {
            color: theme.colors.darkText[0],
            fontWeight: 600,
            lineHeight: '32px',

            paddingLeft: 12,
            paddingRight: 12,
          },

          '&[data-checked]:not([data-disabled])': {
            border: `2px solid ${color}`,
          },
        },

        iconWrapper: {
          display: 'none',
        },
      }}
    />
  );
}

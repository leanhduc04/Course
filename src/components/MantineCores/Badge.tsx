import { BadgeProps, Badge as MantineBadge, useMantineTheme } from '@mantine/core';

export default function Badge({ ...props }: BadgeProps) {
  const theme = useMantineTheme();

  return (
    <MantineBadge
      {...props}
      styles={{
        root: {
          background: theme.colors.primary,
          color: theme.colors.darkText[0],

          height: 48,
          width: 96,

          borderRadius: 16,
          border: `3px solid ${theme.colors.white}`,
        },

        inner: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '24px',
        },
      }}
    />
  );
}

import { ButtonHTMLAttributes } from 'react';
import { Button as MantineButton, ButtonProps, useMantineTheme } from '@mantine/core';

interface MantineButtonProps extends ButtonProps {
  variant?: 'filled' | 'light';
}

export default function Button({
  variant,
  ...props
}: MantineButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const theme = useMantineTheme();

  return (
    <MantineButton
      {...props}
      variant={variant}
      styles={{
        root: {
          background: variant === 'filled' ? theme.colors.primary : 'transparent',
          color: theme.colors.darkText[0],
          height: 64,
          padding: 16,
          borderRadius: 20,
          border: variant === 'filled' ? 'none' : `1px solid ${theme.colors.light[1]}`,
          position: 'relative',
          '&:not([data-disabled]):hover': {
            background: variant === 'filled' ? theme.colors.primary : 'transparent',
          },
        },

        label: {
          fontWeight: 600,
          fontSize: 20,
          lineHeight: '32px',
        },

        rightIcon: {
          position: 'absolute',
          right: 16,
        },
      }}
    />
  );
}

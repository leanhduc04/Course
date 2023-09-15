import { Title as MantineTitle, TitleProps, useMantineTheme } from '@mantine/core';

interface MantineTitleProps extends TitleProps {
  order?: 1 | 2 | 3;
}

export default function Title({ order, ...props }: MantineTitleProps) {
  const theme = useMantineTheme();

  return (
    <MantineTitle
      {...props}
      c={theme.colors.darkText[0]}
      fw={600}
      fz={order === 1 ? 40 : order === 2 ? 24 : 20}
      lh={order === 1 ? '48px' : '32px'}
    />
  );
}

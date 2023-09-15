import { Text as MantineText, TextProps, useMantineTheme } from '@mantine/core';

interface MantineTextProps extends TextProps {
  type?: 'primary' | 'secondary';
  fw?: number;
  fz?: number;
  lh?: string;
}

export default function Text({ type, fw, fz, lh, ...props }: MantineTextProps) {
  const theme = useMantineTheme();

  return (
    <MantineText
      {...props}
      fw={fw || 400}
      fz={fz || 14}
      lh={lh || '24px'}
      c={type === 'primary' ? theme.colors.darkText[0] : theme.colors.darkText[1]}
    />
  );
}

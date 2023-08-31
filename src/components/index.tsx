import { Button, useMantineTheme } from '@mantine/core';

export default function MButton() {
  const theme = useMantineTheme();

  return <Button sx={{ background: theme.colors.accent2 }}>jakas</Button>;
}

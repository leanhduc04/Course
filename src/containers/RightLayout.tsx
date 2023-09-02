import React from 'react';
import { ScrollArea, Stack, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

interface rightLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function RightLayout({ title, children }: rightLayoutProps) {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery('(min-width: 1440px)', true, {
    getInitialValueInEffect: false,
  });
  const { height } = useViewportSize();

  const heightChildren = isDesktop
    ? height - 64 - 48 - 48 - 32 - 32
    : height - 48 - 48 - 48 - 32 - 32;

  return (
    <Stack spacing={32}>
      <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
        {title}
      </Text>
      <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
        <Stack spacing={32}>{children}</Stack>
      </ScrollArea>
    </Stack>
  );
}

import React from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import useBreakpoint from '../hooks/useBreakpoint';
import Title from '../components/MantineCores/Title';

interface rightLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function RightLayout({ title, children }: rightLayoutProps) {
  const { isDesktop } = useBreakpoint();
  const { height } = useViewportSize();

  const heightChildren = isDesktop
    ? height - 64 - 48 - 48 - 32 - 32
    : height - 48 - 48 - 48 - 32 - 32;

  return (
    <Stack spacing={32}>
      <Title order={2}>{title}</Title>
      <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
        <Stack spacing={32}>{children}</Stack>
      </ScrollArea>
    </Stack>
  );
}

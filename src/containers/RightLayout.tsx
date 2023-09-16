import React from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import Title from '../components/MantineCores/Title';

interface rightLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function RightLayout({ title, children }: rightLayoutProps) {
  return (
    <Stack spacing={32}>
      <Title order={2}>{title}</Title>
      <ScrollArea h={700} styles={{ scrollbar: { display: 'none' } }}>
        <Stack spacing={32}>{children}</Stack>
      </ScrollArea>
    </Stack>
  );
}

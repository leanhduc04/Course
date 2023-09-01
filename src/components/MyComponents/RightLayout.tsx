import React from 'react';
import { Stack, Text, useMantineTheme } from '@mantine/core';
import LinkIcon from './LinkIcon';
import IconLeft from '../../assets/Icon/IconLeft';

interface rightLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function RightLayout({ title, children }: rightLayoutProps) {
  const theme = useMantineTheme();

  return (
    <Stack spacing={48}>
      <LinkIcon href="">
        <IconLeft />
      </LinkIcon>
      <Stack spacing={32}>
        <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
          {title}
        </Text>
        {children}
      </Stack>
    </Stack>
  );
}

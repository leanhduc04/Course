import React from 'react';

import { SimpleGrid, useMantineTheme } from '@mantine/core';

import Navbar from '../components/MyComponents/Navbar';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const theme = useMantineTheme();

  return (
    <SimpleGrid
      spacing={64}
      maw={1440}
      mx="auto"
      sx={{
        gridTemplateColumns: '304px 1fr',
        padding: '64px 64px 0',
        [theme.fn.smallerThan('1440')]: {
          width: 768,
          gridTemplateColumns: '120px 1fr',
          padding: '48px 48px 0',
          gap: 62,
        },
      }}
    >
      <Navbar />
      <SimpleGrid
        spacing={64}
        sx={{
          gridTemplateColumns: '1fr 390px',
          [theme.fn.smallerThan('1440')]: { gridTemplateColumns: 'repeat(1, 1fr)' },
        }}
      >
        {children}
      </SimpleGrid>
    </SimpleGrid>
  );
}

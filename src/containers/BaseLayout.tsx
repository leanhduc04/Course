import React from 'react';
import { SimpleGrid } from '@mantine/core';
import Navbar from '../components/MyComponents/Navbar';
import useBreakpoint from '../hooks/useBreakpoint';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const { isDesktop } = useBreakpoint();

  return (
    <SimpleGrid
      maw={1440}
      mx="auto"
      sx={{
        gridTemplateColumns: isDesktop ? '304px 1fr' : '120px 1fr',
        gap: isDesktop ? 64 : 62,
        padding: isDesktop ? '64px 64px 0' : '48px 48px 0',
        width: isDesktop ? 'auto' : 768,
      }}
    >
      <Navbar />
      <SimpleGrid
        spacing={64}
        sx={{
          gridTemplateColumns: isDesktop ? '1fr 390px' : 'repeat(1, 1fr)',
        }}
      >
        {children}
      </SimpleGrid>
    </SimpleGrid>
  );
}

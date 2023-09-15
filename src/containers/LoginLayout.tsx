import React from 'react';
import { Box, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import Carousel from '../components/MyComponents/Carousel';
import useBreakpoint from '../hooks/useBreakpoint';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const { isDesktop } = useBreakpoint();
  const { height } = useViewportSize();

  return (
    <SimpleGrid
      h={height}
      maw={1440}
      mx="auto"
      sx={{
        gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
        gap: isDesktop ? 64 : 0,
        padding: isDesktop ? 64 : 48,
        width: isDesktop ? 'auto' : 768,
      }}
    >
      {isDesktop && (
        <Box
          p={32}
          pt={150}
          sx={{
            display: 'flex',
            border: `1px solid ${theme.colors.light[1]}`,
            borderRadius: 64,
          }}
        >
          <Carousel />
        </Box>
      )}
      {children}
    </SimpleGrid>
  );
}

import React from 'react';
import { Box, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import Carousel from '../components/MyComponents/Carousel';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();

  const { height } = useViewportSize();

  return (
    <SimpleGrid
      h={height}
      maw={1440}
      mx="auto"
      p={64}
      sx={{
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 64,
        [theme.fn.smallerThan('1440')]: {
          width: 768,
          padding: 48,
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: 0,
        },
      }}
    >
      <Box
        p={32}
        pt={150}
        sx={{
          display: 'flex',
          border: `1px solid ${theme.colors.light[1]}`,
          borderRadius: 64,
          [theme.fn.smallerThan('1440')]: {
            display: 'none',
          },
        }}
      >
        <Carousel />
      </Box>
      {children}
    </SimpleGrid>
  );
}

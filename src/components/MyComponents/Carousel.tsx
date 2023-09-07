import { Carousel as MantineCarousel } from '@mantine/carousel';
import { Stack, Text, useMantineTheme } from '@mantine/core';
import NextImage from './NextImage';

export default function Carousel() {
  const theme = useMantineTheme();

  return (
    <MantineCarousel
      height="100%"
      withIndicators
      maw={560}
      mx="auto"
      dragFree
      styles={{
        root: {
          flex: 1,
        },
        controls: {
          top: 'auto',
          bottom: 0,
          justifyContent: 'center',
          gap: 16,
        },

        control: {
          color: theme.colors.darkText[0],

          width: 48,
          height: 48,

          borderColor: theme.colors.light[1],
          boxShadow: 'none',

          svg: {
            width: '24px !important',
            height: '24px !important',
          },
        },

        indicators: {
          bottom: 120,
        },

        indicator: {
          background: theme.colors.light[1],
          width: 6,
          height: 6,

          '&[data-active]': {
            background: theme.colors.secondary,
            width: 16,
          },
        },
      }}
    >
      <MantineCarousel.Slide>
        <Stack h="100%" align="center" spacing={50}>
          <NextImage src="/imgs/avatar.jpg" alt="picture" width={300} height={300} />
          <Stack spacing={16} align="center">
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
              Start Learning{' '}
              <span style={{ textDecoration: `underline ${theme.colors.secondary} 3px` }}>
                New Skills
              </span>
            </Text>
            <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
              Learn almost any skill from a comfort of your home with our app.
            </Text>
          </Stack>
        </Stack>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Stack h="100%" align="center" spacing={50}>
          <NextImage src="/imgs/avatar.jpg" alt="picture" width={300} height={300} />
          <Stack spacing={16} align="center">
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
              Connect With the{' '}
              <span style={{ textDecoration: `underline ${theme.colors.accent1} 3px` }}>
                Tutors
              </span>
            </Text>
            <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
              You can easily connect with thousands of tutors by using our platform.
            </Text>
          </Stack>
        </Stack>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Stack h="100%" align="center" spacing={50}>
          <NextImage src="/imgs/avatar.jpg" alt="picture" width={300} height={300} />
          <Stack spacing={16} align="center">
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
              Fully Flexible{' '}
              <span style={{ textDecoration: `underline ${theme.colors.tertiary} 3px` }}>
                Schedule
              </span>
            </Text>
            <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
              There is no set schedule and you can learn whenever you want to.
            </Text>
          </Stack>
        </Stack>
      </MantineCarousel.Slide>
    </MantineCarousel>
  );
}

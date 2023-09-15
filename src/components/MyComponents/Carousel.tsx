import { Carousel as MantineCarousel } from '@mantine/carousel';
import { Stack, useMantineTheme } from '@mantine/core';
import NextImage from './NextImage';
import Title from '../MantineCores/Title';
import Text from '../MantineCores/Text';

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
        <Stack h="100%" align="center" spacing={0}>
          <NextImage src="/imgs/signup1.jpg" alt="picture" width={350} height={350} />
          <Stack spacing={16} align="center">
            <Title order={2}>
              Start Learning{' '}
              <span style={{ textDecoration: `underline ${theme.colors.secondary} 3px` }}>
                New Skills
              </span>
            </Title>
            <Text w={336} fz={16} lh="26px" ta="center">
              Learn almost any skill from a comfort of your home with our app.
            </Text>
          </Stack>
        </Stack>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Stack h="100%" align="center" spacing={0}>
          <NextImage src="/imgs/signup2.jpg" alt="picture" width={350} height={350} />
          <Stack spacing={16} align="center">
            <Title order={2}>
              Connect With the{' '}
              <span style={{ textDecoration: `underline ${theme.colors.accent1} 3px` }}>
                Tutors
              </span>
            </Title>
            <Text w={336} fz={16} lh="26px" ta="center">
              You can easily connect with thousands of tutors by using our platform.
            </Text>
          </Stack>
        </Stack>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Stack h="100%" align="center" spacing={0}>
          <NextImage src="/imgs/signup3.jpg" alt="picture" width={350} height={350} />
          <Stack spacing={16} align="center">
            <Title order={2}>
              Fully Flexible{' '}
              <span style={{ textDecoration: `underline ${theme.colors.tertiary} 3px` }}>
                Schedule
              </span>
            </Title>
            <Text w={336} fz={16} lh="26px" ta="center">
              There is no set schedule and you can learn whenever you want to.
            </Text>
          </Stack>
        </Stack>
      </MantineCarousel.Slide>
    </MantineCarousel>
  );
}

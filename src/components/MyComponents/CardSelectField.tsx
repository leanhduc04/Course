import { Center, Chip, Group, useMantineTheme } from '@mantine/core';
import IconCheck from '../../assets/Icon/IconCheck';
import useBreakpoint from '../../hooks/useBreakpoint';
import Title from '../MantineCores/Title';

export default function CardSelectField({ title }: { title: string }) {
  const theme = useMantineTheme();
  const { isDesktop } = useBreakpoint();

  return (
    <Chip
      value={title}
      styles={{
        root: {
          display: 'flex',
        },

        label: {
          background: 'transparent',
          color: theme.colors.darkText[0],

          height: 80,
          width: isDesktop ? 624 : 672,
          padding: 24,

          display: 'flex',
          alignItems: 'center',

          borderRadius: 24,
          border: `1px solid ${theme.colors.light[1]}`,

          ...theme.fn.hover({
            background: 'transparent',
          }),

          '&[data-checked]': {
            padding: 24,

            div: {
              'div: first-of-type': {
                background: theme.colors.secondary,
                border: 'none',
              },
            },
          },

          '&[data-checked]:not([data-disabled])': {
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        iconWrapper: {
          display: 'none',
        },
      }}
    >
      <Group spacing={20}>
        <Center
          w={32}
          h={32}
          sx={{
            borderRadius: '50%',
            border: `1px solid ${theme.colors.light[1]}`,
          }}
        >
          <IconCheck />
        </Center>
        <Title order={3}>{title}</Title>
      </Group>
    </Chip>
  );
}

import { Center, Chip, Group, Text, useMantineTheme } from '@mantine/core';
import IconCheck from '../../assets/Icon/IconCheck';

export default function CardSelectField({ title }: { title: string }) {
  const theme = useMantineTheme();

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
          width: 624,
          padding: 24,

          display: 'flex',
          alignItems: 'center',

          fontWeight: 600,
          fontSize: 20,

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

          [theme.fn.smallerThan('1440')]: {
            width: 672,
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
        <Text lh="32px">{title}</Text>
      </Group>
    </Chip>
  );
}

import { Center, Chip, Stack, Text, useMantineTheme } from '@mantine/core';

interface Data {
  icon: any;
  title: string;
  des: string;
  color: string;
}

interface cardSelectProps {
  data: Data[];
}

export default function CardSelectInfo({ data }: cardSelectProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Chip
          value={item.title}
          key={index}
          styles={{
            label: {
              background: 'transparent',

              height: 240,
              width: 624,

              padding: 0,

              borderRadius: 32,
              border: `1px solid ${theme.colors.light[1]}`,

              ...theme.fn.hover({
                background: 'transparent',
              }),

              '&[data-checked]': {
                padding: 0,
              },

              '&[data-checked]:not([data-disabled])': {
                border: `2px solid ${item.color}`,
              },
            },

            iconWrapper: {
              display: 'none',
            },
          }}
        >
          <Stack spacing={24} align="center" justify="center" h="100%">
            <Center
              w={60}
              h={60}
              sx={{
                background: item.color,
                borderRadius: '50%',
                border: `1px solid ${theme.colors.light[1]}`,
              }}
            >
              <item.icon />
            </Center>
            <Stack spacing={8} align="center">
              <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]}>
                {item.title}
              </Text>
              <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[0]}>
                {item.des}
              </Text>
            </Stack>
          </Stack>
        </Chip>
      ))}
    </>
  );
}

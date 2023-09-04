import { Center, Chip, Stack, Text, useMantineTheme } from '@mantine/core';

interface Data {
  icon: any;
  title: string;
  value: string;
}

interface cardSelectProps {
  data: Data[];
}

export default function CardSelect({ data }: cardSelectProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Chip
          value={item.value}
          key={index}
          styles={{
            root: {
              width: 'fit-content',
              height: 130,
            },

            label: {
              background: 'transparent',
              color: theme.colors.darkText[1],

              height: 130,

              padding: 0,

              fontWeight: 400,
              fontSize: 14,
              lineHeight: '24px',

              borderRadius: 40,
              border: `1px solid ${theme.colors.light[1]}`,

              ...theme.fn.hover({
                background: 'transparent',
              }),

              '&[data-checked]': {
                color: theme.colors.darkText[0],
                fontWeight: 600,

                padding: 0,

                div: {
                  'div: first-of-type': {
                    background: theme.colors.accent1,
                    border: 'none',
                  },
                },
              },

              '&[data-checked]:not([data-disabled])': {
                border: `2px solid ${theme.colors.accent1}`,
              },
            },

            iconWrapper: {
              display: 'none',
            },
          }}
        >
          <Stack spacing={16} align="center" p={10}>
            <Center
              w={60}
              h={60}
              sx={{
                borderRadius: '50%',
                border: `1px solid ${theme.colors.light[1]}`,
              }}
            >
              <item.icon />
            </Center>
            <Text>{item.title}</Text>
          </Stack>
        </Chip>
      ))}
    </>
  );
}

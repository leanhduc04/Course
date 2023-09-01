import { Center, Chip, Stack, Text, useMantineTheme } from '@mantine/core';

interface Data {
  icon: any;
  title: string;
  color: string;
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

              padding: 10,

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

                padding: 10,

                div: {
                  'div: first-of-type': {
                    background: `${item.color}`,
                    border: 'none',
                  },
                },
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
          <Stack spacing={16} align="center">
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

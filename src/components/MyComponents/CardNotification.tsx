import { Center, Group, Highlight, Stack, Text, useMantineTheme } from '@mantine/core';
import React from 'react';

interface Data {
  title: string;
  time: string;
  des: string;
  colorIcon: string;
  icon: any;
}

interface cardNotificationProps {
  data: Data[];
}

export default function CardNotification({ data }: cardNotificationProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Group
          key={index}
          spacing={24}
          p={24}
          w={390}
          h="fit-content"
          sx={{
            borderRadius: 32,
            border: `1px solid ${theme.colors.light[1]}`,
            [theme.fn.smallerThan('1440')]: {
              width: 490,
            },
          }}
          align="flex-start"
        >
          <Center w={64} h={64} sx={{ background: `${item.colorIcon}`, borderRadius: '50%' }}>
            <item.icon />
          </Center>
          <Stack spacing={0}>
            <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]}>
              {item.title}
            </Text>
            <Highlight
              pt={6}
              pb={10}
              fw={400}
              fz={14}
              lh="24px"
              c={theme.colors.darkText[1]}
              highlight={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
              highlightStyles={{
                fontWeight: 600,
                background: 'transparent',
                color: theme.colors.darkText[0],
              }}
            >
              {item.des}
            </Highlight>
            <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
              {item.time}
            </Text>
          </Stack>
        </Group>
      ))}
    </>
  );
}
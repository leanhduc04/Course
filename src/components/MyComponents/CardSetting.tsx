import { Center, Group, Highlight, Stack, Text, useMantineTheme } from '@mantine/core';

interface Data {
  title: string;
  des: string;
  colorIcon: string;
  icon: any;
}

interface cardSettingProps {
  data: Data[];
}

export default function CardSetting({ data }: cardSettingProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Group
          key={index}
          spacing={24}
          p={24}
          w={490}
          h="fit-content"
          sx={{ borderRadius: 32, border: `1px solid ${theme.colors.light[1]}` }}
          align="flex-start"
        >
          <Center w={64} h={64} sx={{ background: `${item.colorIcon}`, borderRadius: '50%' }}>
            <item.icon />
          </Center>
          <Stack spacing={6}>
            <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]}>
              {item.title}
            </Text>
            <Highlight
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
          </Stack>
        </Group>
      ))}
    </>
  );
}

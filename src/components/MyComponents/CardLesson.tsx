import { Center, SimpleGrid, Stack, Text, useMantineTheme } from '@mantine/core';
import Progress from './Progress';

interface Data {
  title: string;
  time: string;
  des: string;
  colorIcon: string;
  icon: any;
  colorProgress: string;
  valueProgress: number;
}

interface cardLessonProps {
  data: Data[];
}

export default function CardLesson({ data }: cardLessonProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <SimpleGrid
          key={index}
          spacing={24}
          p={24}
          w={390}
          h="fit-content"
          sx={{
            gridTemplateColumns: '64px 1fr',
            borderRadius: 32,
            border: `1px solid ${theme.colors.light[1]}`,
            [theme.fn.smallerThan('1440')]: {
              width: 490,
            },
          }}
        >
          <Center w={64} h={64} sx={{ background: `${item.colorIcon}`, borderRadius: '50%' }}>
            <item.icon />
          </Center>
          <Stack spacing={24}>
            <Stack spacing={0}>
              <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
                {item.time}
              </Text>
              <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]} pt={2} pb={6}>
                {item.title}
              </Text>
              <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
                {item.des}
              </Text>
            </Stack>
            <Progress value={item.valueProgress} color={item.colorProgress} />
          </Stack>
        </SimpleGrid>
      ))}
    </>
  );
}

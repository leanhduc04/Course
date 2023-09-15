import { Center, SimpleGrid, Stack, useMantineTheme } from '@mantine/core';
import Progress from './Progress';
import useBreakpoint from '../../hooks/useBreakpoint';
import Text from '../MantineCores/Text';
import Title from '../MantineCores/Title';

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
  const { isDesktop } = useBreakpoint();

  return (
    <>
      {data.map((item, index) => (
        <SimpleGrid
          key={index}
          spacing={24}
          p={24}
          h="fit-content"
          sx={{
            width: isDesktop ? 390 : 490,
            gridTemplateColumns: '64px 1fr',
            borderRadius: 32,
            border: `1px solid ${theme.colors.light[1]}`,
          }}
        >
          <Center w={64} h={64} sx={{ background: `${item.colorIcon}`, borderRadius: '50%' }}>
            <item.icon />
          </Center>
          <Stack spacing={24}>
            <Stack spacing={0}>
              <Text>{item.time}</Text>
              <Title order={3} pt={2} pb={6}>
                {item.title}
              </Title>
              <Text>{item.des}</Text>
            </Stack>
            <Progress value={item.valueProgress} color={item.colorProgress} />
          </Stack>
        </SimpleGrid>
      ))}
    </>
  );
}

import { Center, SimpleGrid, Stack, useMantineTheme } from '@mantine/core';
import useBreakpoint from '../../hooks/useBreakpoint';
import Title from '../MantineCores/Title';
import Text from '../MantineCores/Text';
import Highlight from '../MantineCores/Highlight';

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
          <Stack spacing={0}>
            <Title order={3}>{item.title}</Title>
            <Highlight highlight={[]}>{item.des}</Highlight>
            <Text>{item.time}</Text>
          </Stack>
        </SimpleGrid>
      ))}
    </>
  );
}

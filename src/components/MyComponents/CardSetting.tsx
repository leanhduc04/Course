import { Center, SimpleGrid, Stack, useMantineTheme } from '@mantine/core';
import Title from '../MantineCores/Title';
import Highlight from '../MantineCores/Highlight';

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
        <SimpleGrid
          key={index}
          spacing={24}
          p={24}
          w={490}
          h="fit-content"
          sx={{
            gridTemplateColumns: '64px 1fr',
            borderRadius: 32,
            border: `1px solid ${theme.colors.light[1]}`,
          }}
        >
          <Center w={64} h={64} sx={{ background: `${item.colorIcon}`, borderRadius: '50%' }}>
            <item.icon />
          </Center>
          <Stack spacing={6}>
            <Title order={3}>{item.title}</Title>
            <Highlight highlight={[]}>{item.des}</Highlight>
          </Stack>
        </SimpleGrid>
      ))}
    </>
  );
}

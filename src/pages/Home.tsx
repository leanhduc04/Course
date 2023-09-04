import { Box, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import RightLayout from '../containers/RightLayout';
import CardLesson from '../components/MyComponents/CardLesson';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import Tabs from '../containers/Tabs';
import { dataLesson } from '../constants/dataLesson.constant';

export default function Home() {
  const theme = useMantineTheme();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <Stack spacing={8}>
            <Text fw={400} fz={20} lh="24px">
              Hello,
            </Text>
            <Title>John Smith 👋</Title>
          </Stack>
          <Box sx={{ display: 'none', [theme.fn.smallerThan('1440')]: { display: 'flex' } }}>
            <GroupLinkIcon />
          </Box>
        </Group>
        <Stack spacing={32}>
          <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
            Courses 😉
          </Text>
          <Tabs />
        </Stack>
      </Stack>
      <Stack spacing={48} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
        <Stack align="flex-end">
          <GroupLinkIcon />
        </Stack>
        <RightLayout title="Lessons 📖">
          <CardLesson data={dataLesson} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

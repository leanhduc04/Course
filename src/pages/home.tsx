import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import Search from '../components/MyComponents/Search';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconBell from '../assets/Icon/IconBell';
import RightLayout from '../containers/RightLayout';
import CardLesson from '../components/MyComponents/CardLesson';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import { dataLesson } from '../constants/dataLesson.constant';
import Tabs from '../containers/Tabs';

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
          <GroupLinkIcon />
        </Group>
        <Stack spacing={32}>
          <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
            Courses 😉
          </Text>
          <Tabs />
        </Stack>
      </Stack>
      <Stack spacing={48} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
        <Group spacing={32}>
          <Search />
          <LinkIcon href="/notification">
            <IconBell />
          </LinkIcon>
        </Group>
        <RightLayout title="Lessons 📖">
          <CardLesson data={dataLesson} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

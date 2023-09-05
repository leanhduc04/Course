import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import RightLayout from '../containers/RightLayout';
import CardLesson from '../components/MyComponents/CardLesson';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import Tabs from '../containers/Tabs';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconRight from '../assets/Icon/IconRight';
import { dataLesson } from '../constants/dataLesson.constant';

export default function MyCourse() {
  const theme = useMantineTheme();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group spacing={0}>
          <Title>My Courses 🗄️</Title>
          <Group
            spacing={16}
            sx={{ display: 'none', [theme.fn.smallerThan('1440')]: { display: 'flex' } }}
          >
            <GroupLinkIcon />
            <LinkIcon smallIcon href="/lesson">
              <IconRight />
            </LinkIcon>
          </Group>
        </Group>
        <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
          Courses 😉
        </Text>
        <Tabs />
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

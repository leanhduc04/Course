import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import RightLayout from '../containers/RightLayout';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import CardTopic from '../components/MyComponents/CardTopic';
import HistoryBack from '../components/MyComponents/HistoryBack';
import { dataTopic } from '../constants/dataTopic.constant';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconRight from '../assets/Icon/IconRight';
import Progress from '../components/MyComponents/Progress';

export default function Course() {
  const theme = useMantineTheme();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <HistoryBack />
          <Group
            spacing={16}
            sx={{ display: 'none', [theme.fn.smallerThan('1440')]: { display: 'flex' } }}
          >
            <GroupLinkIcon />
            <LinkIcon href="/topic" smallIcon>
              <IconRight />
            </LinkIcon>
          </Group>
        </Group>
        <Stack spacing={32}>
          <iframe
            width="490"
            height="304"
            src="https://www.youtube.com/embed/CBWnBi-awSA"
            title="Video"
            style={{ border: 'none', borderRadius: 32 }}
          />
          <Stack spacing={0}>
            <Text fw={400} fz={16} lh="24px" c={theme.colors.darkText[1]}>
              - 0 h 55 min
            </Text>
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]} mt={6} mb={16}>
              Complete Introduction to the Basics of JavaScript
            </Text>
            <Text fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]}>
              Here are all the basics that you need to know in order to get started.
            </Text>
          </Stack>
          <Progress value={12} color={theme.colors.secondary[0]} />
        </Stack>
      </Stack>
      <Stack spacing={48} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
        <Stack align="flex-end">
          <GroupLinkIcon />
        </Stack>
        <RightLayout title="Topics 📚">
          <CardTopic data={dataTopic} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

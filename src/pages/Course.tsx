import { Group, Stack, useMantineTheme } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import RightLayout from '../containers/RightLayout';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import CardTopic from '../components/MyComponents/CardTopic';
import HistoryBack from '../components/MyComponents/HistoryBack';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconRight from '../assets/Icon/IconRight';
import Progress from '../components/MyComponents/Progress';
import useBreakpoint from '../hooks/useBreakpoint';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';
import { dataTopic } from '../constants/dataTopic.constant';

export default function Course() {
  const theme = useMantineTheme();
  const { isDesktop, isTablet } = useBreakpoint();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <HistoryBack />
          {isTablet && (
            <Group spacing={16}>
              <GroupLinkIcon />
              <LinkIcon href="/topic" smallIcon>
                <IconRight />
              </LinkIcon>
            </Group>
          )}
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
            <Text fz={16}>- 0 h 55 min</Text>
            <Title order={2} mt={6} mb={16}>
              Complete Introduction to the Basics of JavaScript
            </Title>
            <Text fz={16} lh="26px">
              Here are all the basics that you need to know in order to get started.
            </Text>
          </Stack>
          <Progress value={12} color={theme.colors.secondary[0]} />
        </Stack>
      </Stack>
      {isDesktop && (
        <Stack spacing={48}>
          <Stack align="flex-end">
            <GroupLinkIcon />
          </Stack>
          <RightLayout title="Topics 📚">
            <CardTopic data={dataTopic} />
          </RightLayout>
        </Stack>
      )}
    </BaseLayout>
  );
}

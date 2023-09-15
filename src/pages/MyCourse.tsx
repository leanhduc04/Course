import { Group, Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import RightLayout from '../containers/RightLayout';
import CardLesson from '../components/MyComponents/CardLesson';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import Tabs from '../containers/Tabs';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconRight from '../assets/Icon/IconRight';
import useBreakpoint from '../hooks/useBreakpoint';
import { dataLesson } from '../constants/dataLesson.constant';

export default function MyCourse() {
  const { isDesktop, isTablet } = useBreakpoint();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group spacing={0}>
          <Title order={1}>My Courses 🗄️</Title>
          {isTablet && (
            <Group spacing={16}>
              <GroupLinkIcon />
              <LinkIcon smallIcon href="/lesson">
                <IconRight />
              </LinkIcon>
            </Group>
          )}
        </Group>
        <Title order={2} pb={16}>
          Courses 😉
        </Title>
        <Tabs />
      </Stack>
      {isDesktop && (
        <Stack spacing={48}>
          <Stack align="flex-end">
            <GroupLinkIcon />
          </Stack>
          <RightLayout title="Lessons 📖">
            <CardLesson data={dataLesson} />
          </RightLayout>
        </Stack>
      )}
    </BaseLayout>
  );
}

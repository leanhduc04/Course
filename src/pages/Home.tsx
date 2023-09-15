import { Group, Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';
import RightLayout from '../containers/RightLayout';
import CardLesson from '../components/MyComponents/CardLesson';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import Tabs from '../containers/Tabs';
import useBreakpoint from '../hooks/useBreakpoint';
import { dataLesson } from '../constants/dataLesson.constant';

export default function Home() {
  const { isDesktop, isTablet } = useBreakpoint();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <Stack spacing={8}>
            <Text fz={20}>Hello,</Text>
            <Title order={1}>John Smith 👋</Title>
          </Stack>
          {isTablet && <GroupLinkIcon />}
        </Group>
        <Stack spacing={32}>
          <Title order={2}>Courses 😉</Title>
          <Tabs />
        </Stack>
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

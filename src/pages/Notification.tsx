import { Group, Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';
import RightLayout from '../containers/RightLayout';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import Tabs from '../containers/Tabs';
import HistoryBack from '../components/MyComponents/HistoryBack';
import CardNotification from '../components/MyComponents/CardNotification';
import useBreakpoint from '../hooks/useBreakpoint';
import { dataNotification } from '../constants/dataNotification';

export default function Notification() {
  const { isDesktop } = useBreakpoint();

  return (
    <BaseLayout>
      {isDesktop && (
        <Stack spacing={48}>
          <Group position="apart">
            <Stack spacing={8}>
              <Text fz={20}>Hello,</Text>
              <Title order={1}>John Smith 👋</Title>
            </Stack>
            <GroupLinkIcon />
          </Group>
          <Stack spacing={32}>
            <Title order={2}>Courses 😉</Title>
            <Tabs />
          </Stack>
        </Stack>
      )}
      <Stack spacing={48}>
        <HistoryBack />
        <RightLayout title="Notifications 🔔">
          <CardNotification data={dataNotification} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import RightLayout from '../containers/RightLayout';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import Tabs from '../containers/Tabs';
import HistoryBack from '../components/MyComponents/HistoryBack';
import CardNotification from '../components/MyComponents/CardNotification';
import { dataNotification } from '../constants/dataNotification';

export default function Notification() {
  const theme = useMantineTheme();

  return (
    <BaseLayout>
      <Stack spacing={48} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
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
      <Stack spacing={48}>
        <HistoryBack />
        <RightLayout title="Notifications 🔔">
          <CardNotification data={dataNotification} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

import { Group, Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import RightLayout from '../containers/RightLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import CardTopic from '../components/MyComponents/CardTopic';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import { dataTopic } from '../constants/dataTopic.constant';

export default function Topic() {
  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <HistoryBack />
          <GroupLinkIcon />
        </Group>
        <RightLayout title=" Topics 📚">
          <CardTopic data={dataTopic} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

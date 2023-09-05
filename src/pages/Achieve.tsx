import { Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import RightLayout from '../containers/RightLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import CardAchieve from '../components/MyComponents/CardAchieve';
import { dataAchieve } from '../constants/dataAchieve.constant';

export default function Achieve() {
  return (
    <BaseLayout>
      <Stack spacing={48}>
        <HistoryBack />
        <RightLayout title="Achievements 🏆">
          <CardAchieve data={dataAchieve} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

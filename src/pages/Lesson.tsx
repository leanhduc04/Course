import { Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import RightLayout from '../containers/RightLayout';
import CardLesson from '../components/MyComponents/CardLesson';
import HistoryBack from '../components/MyComponents/HistoryBack';
import { dataLesson } from '../constants/dataLesson.constant';

export default function Lesson() {
  return (
    <BaseLayout>
      <Stack spacing={48}>
        <HistoryBack />
        <RightLayout title="Lessons 📖">
          <CardLesson data={dataLesson} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

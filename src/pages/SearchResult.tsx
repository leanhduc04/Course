import { Group, ScrollArea, SimpleGrid, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import BaseLayout from '../containers/BaseLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import SearchInput from '../components/MyComponents/SearchInput';
import CardCourse from '../components/MyComponents/CardCourse';
import Title from '../components/MantineCores/Title';
import { dataCourse } from '../constants/dataCourse.constant';

export default function SearchResult() {
  const { height } = useViewportSize();

  const heightChildren = height - 48 - 48 - 48 - 32 - 32;

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group spacing={32}>
          <HistoryBack />
          <SearchInput />
        </Group>
        <Stack spacing={32}>
          <Title order={2}>Search Results 🔍</Title>
          <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
            <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <CardCourse data={dataCourse.slice(5, 11)} />
            </SimpleGrid>
          </ScrollArea>
        </Stack>
      </Stack>
    </BaseLayout>
  );
}

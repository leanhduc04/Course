import {
  Chip as MantineChip,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import BaseLayout from '../containers/BaseLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import SearchInput from '../components/MyComponents/SearchInput';
import CardCourse from '../components/MyComponents/CardCourse';
import Chip from '../components/MantineCores/Chip';
import CardSelect from '../components/MyComponents/CardSelect';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconBell from '../assets/Icon/IconBell';
import Text from '../components/MantineCores/Text';
import Title from '../components/MantineCores/Title';
import useBreakpoint from '../hooks/useBreakpoint';
import { dataSelect } from '../constants/dataSelect.constant';
import { dataCourse } from '../constants/dataCourse.constant';

export default function Search() {
  const theme = useMantineTheme();
  const { isDesktop } = useBreakpoint();

  return (
    <BaseLayout>
      {isDesktop && (
        <Stack spacing={48}>
          <Group spacing={32}>
            <HistoryBack />
            <SearchInput />
          </Group>
          <Stack spacing={32}>
            <Title order={2}>Search Results 🔍</Title>
            <ScrollArea h={700} styles={{ scrollbar: { display: 'none' } }}>
              <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <CardCourse data={dataCourse.slice(5, 11)} />
              </SimpleGrid>
            </ScrollArea>
          </Stack>
        </Stack>
      )}
      <Stack spacing={48}>
        {isDesktop ? (
          <Stack align="flex-end">
            <LinkIcon href="/notification">
              <IconBell />
            </LinkIcon>
          </Stack>
        ) : (
          <Group spacing={32}>
            <HistoryBack />
            <SearchInput />
          </Group>
        )}
        <Stack spacing={32}>
          <Title order={2}>Search Filters 🗂️</Title>
          <Stack spacing={48}>
            <Stack spacing={32}>
              <Text fz={16} type="primary">
                Category
              </Text>
              <MantineChip.Group>
                <Group position="apart">
                  <CardSelect data={dataSelect} />
                </Group>
              </MantineChip.Group>
            </Stack>
            <Stack spacing={32}>
              <Text fz={16} type="primary">
                Duration
              </Text>
              <MantineChip.Group>
                <Group position="apart">
                  <Chip value="1" color={theme.colors.secondary[0]} widthChip={64}>
                    1h
                  </Chip>
                  <Chip value="2" color={theme.colors.secondary[0]} widthChip={64}>
                    2h
                  </Chip>
                  <Chip value="3" color={theme.colors.secondary[0]} widthChip={64}>
                    5h
                  </Chip>
                  <Chip value="4" color={theme.colors.secondary[0]} widthChip={64}>
                    10h
                  </Chip>
                </Group>
              </MantineChip.Group>
            </Stack>
            <Stack spacing={32}>
              <Text fz={16} type="primary">
                Type
              </Text>
              <MantineChip.Group>
                <Group grow spacing={32}>
                  <Chip value="1" color={theme.colors.tertiary[0]} widthChip="50%">
                    Individual
                  </Chip>
                  <Chip value="2" color={theme.colors.tertiary[0]} widthChip="50%">
                    Team
                  </Chip>
                </Group>
              </MantineChip.Group>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={24}>
          {isDesktop ? (
            <Button variant="filled" rightIcon={<IconRight />}>
              Apply Filters
            </Button>
          ) : (
            <Link href="/search-result" style={{ textDecoration: 'none' }}>
              <Button
                variant="filled"
                rightIcon={<IconRight />}
                sx={{
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                Apply Filters
              </Button>
            </Link>
          )}

          <Button variant="light">Clear All</Button>
        </Stack>
      </Stack>
    </BaseLayout>
  );
}

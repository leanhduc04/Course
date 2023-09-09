import {
  Chip as MantineChip,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
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
import { dataSelect } from '../constants/dataSelect.constant';
import { dataCourse } from '../constants/dataCourse.constant';

export default function Search() {
  const theme = useMantineTheme();

  const isDesktop = useMediaQuery('(min-width: 1440px)', true, {
    getInitialValueInEffect: false,
  });

  const { height } = useViewportSize();

  const heightChildren = height - 64 - 48 - 48 - 32 - 32;

  return (
    <BaseLayout>
      <Stack spacing={48} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
        <Group spacing={32}>
          <HistoryBack />
          <SearchInput />
        </Group>
        <Stack spacing={32}>
          <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
            Search Results 🔍
          </Text>
          <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
            <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <CardCourse data={dataCourse.slice(5, 11)} />
            </SimpleGrid>
          </ScrollArea>
        </Stack>
      </Stack>
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
          <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]}>
            Search Filters 🗂️
          </Text>
          <Stack spacing={48}>
            <Stack spacing={32}>
              <Text fw={400} fz={16} lh="24px" c={theme.colors.darkText[0]}>
                Category
              </Text>
              <MantineChip.Group>
                <Group position="apart">
                  <CardSelect data={dataSelect} />
                </Group>
              </MantineChip.Group>
            </Stack>
            <Stack spacing={32}>
              <Text fw={400} fz={16} lh="24px" c={theme.colors.darkText[0]}>
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
              <Text fw={400} fz={16} lh="24px" c={theme.colors.darkText[0]}>
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
            <Button
              variant="filled"
              rightIcon={<IconRight />}
              sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}
            >
              Apply Filters
            </Button>
          ) : (
            <Link href="/search-result" style={{ textDecoration: 'none' }}>
              <Button
                variant="filled"
                rightIcon={<IconRight />}
                sx={{
                  display: 'none',
                  width: '100%',
                  justifyContent: 'center',
                  [theme.fn.smallerThan('1440')]: { display: 'flex' },
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

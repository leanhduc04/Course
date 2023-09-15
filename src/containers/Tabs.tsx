import {
  Center,
  Tabs as MantineTabs,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import CardCourse from '../components/MyComponents/CardCourse';
import { dataCourse } from '../constants/dataCourse.constant';
import { dataSelect } from '../constants/dataSelect.constant';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Tabs() {
  const theme = useMantineTheme();
  const { isDesktop } = useBreakpoint();
  const { height } = useViewportSize();

  const heightChildren = isDesktop
    ? height - 64 - 80 - 48 - 32 - 32 - 130 - 48
    : height - 48 - 80 - 48 - 32 - 32 - 130 - 48;

  const renderTab = dataSelect.map((item, index) => (
    <MantineTabs.Tab key={index} value={item.value}>
      <Stack spacing={16} align="center" p={10}>
        <Center
          w={60}
          h={60}
          sx={{
            borderRadius: '50%',
            border: `1px solid ${theme.colors.light[1]}`,
          }}
        >
          <item.icon />
        </Center>
        <Text>{item.title}</Text>
      </Stack>
    </MantineTabs.Tab>
  ));

  return (
    <MantineTabs
      defaultValue="popular"
      styles={{
        tabsList: { border: 'none', justifyContent: 'space-between' },
        tab: {
          height: 130,

          marginBottom: 48,
          padding: 0,

          borderRadius: 40,
          border: `1px solid ${theme.colors.light[1]}`,

          '&[data-active]': {
            color: theme.colors.darkText[0],
            fontWeight: 600,
            border: `2px solid ${theme.colors.secondary}`,

            div: {
              'div: first-of-type': {
                background: theme.colors.secondary,
                border: 'none',
                svg: {
                  color: theme.colors.white,
                },
              },
            },
          },

          ':hover': {
            background: 'transparent',
            border: `1px solid ${theme.colors.light[1]}`,
          },

          '&[data-active]:hover': {
            background: 'transparent',
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        panel: {
          height: heightChildren,
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}
    >
      <MantineTabs.List>{renderTab}</MantineTabs.List>

      <MantineTabs.Panel value="new">
        <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <CardCourse data={dataCourse.slice(0, 6)} />
        </SimpleGrid>
      </MantineTabs.Panel>
      <MantineTabs.Panel value="popular">
        <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <CardCourse data={dataCourse.slice(3, 9)} />
        </SimpleGrid>
      </MantineTabs.Panel>
      <MantineTabs.Panel value="free">
        <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <CardCourse data={dataCourse.slice(5, 11)} />
        </SimpleGrid>
      </MantineTabs.Panel>
      <MantineTabs.Panel value="pro">
        <SimpleGrid spacing={32} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <CardCourse data={dataCourse.slice(7, 13)} />
        </SimpleGrid>
      </MantineTabs.Panel>
    </MantineTabs>
  );
}

import { Navbar as MantineNavbar, ScrollArea, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import { NavbarItem } from './NavbarItem';

import Button from '../MantineCores/Button';
import CardUser from './CardUser';
import CardPromotion from './CardPromotion';
import IconHome from '../../assets/Icon/IconHome';
import IconCourse from '../../assets/Icon/IconCourse';
import IconUser from '../../assets/Icon/IconUser';

const navbarData = [
  { id: 1, href: '/', label: 'Home', icon: IconHome },
  {
    id: 2,
    href: '/my-courses',
    label: 'My Courses',
    icon: IconCourse,
  },
  {
    id: 3,
    href: '/profile',
    label: 'Profile',
    icon: IconUser,
  },
];

export default function Navbar() {
  const theme = useMantineTheme();

  const isDesktop = useMediaQuery('(min-width: 1440px)', true, {
    getInitialValueInEffect: false,
  });

  const { height } = useViewportSize();

  const heightChildren = isDesktop ? height - 64 : height - 48;

  return (
    <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
      <MantineNavbar
        sx={{
          zIndex: 0,
          gap: 32,
          paddingBottom: 64,
          width: 304,
          border: 'none',
          justifyContent: 'space-between',
          [theme.fn.smallerThan('1440')]: { paddingBottom: 48, width: 120 },
        }}
      >
        <Stack spacing={32}>
          <MantineNavbar.Section>
            <CardUser src="/imgs/avatar.jpg" name="John Smith" email="johnsmith@gmail.com" />
          </MantineNavbar.Section>
          <MantineNavbar.Section>
            <Stack
              spacing={20}
              sx={{
                padding: 32,
                borderRadius: 48,
                border: `1px solid ${theme.colors.light[1]}`,

                [theme.fn.smallerThan('1440')]: {
                  borderRadius: 32,
                },
              }}
            >
              <NavbarItem data={navbarData} />
            </Stack>
          </MantineNavbar.Section>
          <MantineNavbar.Section sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
            <CardPromotion />
          </MantineNavbar.Section>
        </Stack>
        <Button variant="light">Log Out</Button>
      </MantineNavbar>
    </ScrollArea>
  );
}

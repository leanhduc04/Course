import { Navbar as MantineNavbar, ScrollArea, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import { NavbarItem } from './NavbarItem';

import Button from '../MantineCores/Button';
import CardUser from './CardUser';
import CardPromotion from './CardPromotion';
import IconHome from '../../assets/Icon/IconHome';
import IconCourse from '../../assets/Icon/IconCourse';
import IconUser from '../../assets/Icon/IconUser';
import { dataUser } from '../../constants/dataUser.constant';
import Link from 'next/link';

const navbarData = [
  { id: 1, href: '/', label: 'Home', icon: IconHome },
  {
    id: 2,
    href: '/my-course',
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

          width: 304,
          border: 'none',
          justifyContent: 'space-between',
          [theme.fn.smallerThan('1440')]: { width: 120 },
        }}
      >
        <Stack spacing={32}>
          <MantineNavbar.Section>
            <CardUser src={dataUser.src} name={dataUser.name} email={dataUser.email} />
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
        <Link href="/sign-in">
          <Button variant="light" w="100%">
            Log Out
          </Button>
        </Link>
      </MantineNavbar>
    </ScrollArea>
  );
}

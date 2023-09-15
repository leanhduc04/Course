import { Navbar as MantineNavbar, ScrollArea, Stack, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import Link from 'next/link';
import { NavbarItem } from './NavbarItem';
import Button from '../MantineCores/Button';
import CardUser from './CardUser';
import CardPromotion from './CardPromotion';
import IconHome from '../../assets/Icon/IconHome';
import IconSaved from '../../assets/Icon/IconSaved';
import IconUser from '../../assets/Icon/IconUser';
import useBreakpoint from '../../hooks/useBreakpoint';
import { dataUser } from '../../constants/dataUser.constant';

const navbarData = [
  { id: 1, href: '/', label: 'Home', icon: IconHome },
  {
    id: 2,
    href: '/my-course',
    label: 'My Courses',
    icon: IconSaved,
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
  const { isDesktop } = useBreakpoint();
  const { height } = useViewportSize();

  const heightChildren = isDesktop ? height - 64 : height - 48;

  return (
    <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
      <MantineNavbar
        sx={{
          zIndex: 0,
          width: isDesktop ? 304 : 120,
          border: 'none',
          justifyContent: 'space-between',
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
                borderRadius: isDesktop ? 48 : 32,
                border: `1px solid ${theme.colors.light[1]}`,
              }}
            >
              <NavbarItem data={navbarData} />
            </Stack>
          </MantineNavbar.Section>
          {isDesktop && (
            <MantineNavbar.Section>
              <CardPromotion />
            </MantineNavbar.Section>
          )}

          <Link href="/sign-in">
            <Button variant="light" w="100%">
              Log Out
            </Button>
          </Link>
        </Stack>
      </MantineNavbar>
    </ScrollArea>
  );
}

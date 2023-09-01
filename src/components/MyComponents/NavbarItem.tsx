import { Group, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Data {
  icon: any;
  label: string;
  href: string;
}

interface NavbarItem {
  data: Data[];
}

export function NavbarItem({ data }: NavbarItem) {
  const { pathname } = useRouter();
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Link key={index} href={item.href} passHref style={{ textDecoration: 'none' }}>
          <Group
            spacing={16}
            sx={{
              borderRadius: 20,
              padding: 12,
              background: `${item.href === pathname ? theme.colors.primary : 'transparent'}`,
            }}
          >
            <item.icon />
            <Text
              fw={item.href === pathname ? 600 : 400}
              fz={16}
              lh="24px"
              c={item.href === pathname ? theme.colors.darkText[0] : theme.colors.darkText[1]}
              sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}
            >
              {item.label}
            </Text>
          </Group>
        </Link>
      ))}
    </>
  );
}

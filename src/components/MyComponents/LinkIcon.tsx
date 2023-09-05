import { Center, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

interface linkIconProps {
  smallIcon?: boolean;
  href: string;
  children: React.ReactNode;
}

export default function LinkIcon({ smallIcon, href, children }: linkIconProps) {
  const theme = useMantineTheme();

  return (
    <Link href={href}>
      <Center
        w={48}
        h={48}
        sx={{
          borderRadius: '50%',
          border: `1px solid ${theme.colors.light[1]}`,
          svg: { width: smallIcon ? 16 : 24, height: smallIcon ? 16 : 24 },
        }}
      >
        {children}
      </Center>
    </Link>
  );
}

import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import NextImage from './NextImage';
import IconRight from '../../assets/Icon/IconRight';

interface cardUserProps {
  src: string;
  name: string;
  email: string;
}

export default function CardUser({ src, name, email }: cardUserProps) {
  const theme = useMantineTheme();

  return (
    <Group
      spacing={20}
      sx={{
        padding: 24,
        borderRadius: 32,
        border: `1px solid ${theme.colors.light[1]}`,
        [theme.fn.smallerThan('1440')]: { border: 'none', gap: 0, padding: '0px 36px' },
      }}
    >
      <NextImage src={src} alt="avatar" width={48} height={48} style={{ borderRadius: 48 }} />
      <Group spacing={14} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
        <Stack spacing={4} w={156}>
          <Text fw={600} fz={16} lh="24px" c={theme.colors.darkText[0]}>
            {name}
          </Text>
          <Text fw={400} fz={12} lh="16px" c={theme.colors.darkText[1]}>
            {email}
          </Text>
        </Stack>
        <IconRight />
      </Group>
    </Group>
  );
}

import { Center, Stack, Text, useMantineTheme } from '@mantine/core';
import Button from '../MantineCores/Button';
import IconRight from '../../assets/Icon/IconRight';
import IconUser from '../../assets/Icon/IconUser';

export default function CardPromotion() {
  const theme = useMantineTheme();

  return (
    <Stack
      spacing={48}
      p={32}
      sx={{ borderRadius: 48, border: `1px solid ${theme.colors.light[1]}` }}
    >
      <Stack spacing={24} align="center">
        <Center w={64} h={64} sx={{ background: theme.colors.secondary, borderRadius: 20 }}>
          <IconUser />
        </Center>
        <Stack spacing={8} align="center">
          <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]}>
            Upgrade Plan
          </Text>
          <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]} ta="center">
            Become a <span style={{ fontWeight: 600, color: theme.colors.darkText[0] }}>Pro</span>{' '}
            member today and save more than{' '}
            <span style={{ fontWeight: 600, color: theme.colors.darkText[0] }}>75%</span>.
          </Text>
        </Stack>
      </Stack>

      <Button variant="filled" rightIcon={<IconRight />}>
        See Deal
      </Button>
    </Stack>
  );
}

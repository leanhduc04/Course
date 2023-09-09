import { Chip as MantineChip, Box, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import LoginLayout from '../containers/LoginLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import Link from 'next/link';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import CardSelectField from '../components/MyComponents/CardSelectField';

export default function SignUp2() {
  const theme = useMantineTheme();

  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Group position="apart" align="flex-start">
          <HistoryBack />
          <Stack spacing={16} align="center">
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
              What Do You Like?
            </Text>
            <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
              Please choose at least one from the following items to get started.
            </Text>
          </Stack>
          <Box w={48} />
        </Group>
        <Stack justify="space-between" h="100%">
          <MantineChip.Group>
            <Stack spacing={32}>
              <CardSelectField title="Digital Design" />
              <CardSelectField title="Computer Programming" />
              <CardSelectField title="Data Analysis" />
              <CardSelectField title="Entrepreneurship" />
            </Stack>
          </MantineChip.Group>
          <Link href="/sign-up-3">
            <Button variant="filled" rightIcon={<IconRight />} w="100%">
              Continue
            </Button>
          </Link>
        </Stack>
      </Stack>
    </LoginLayout>
  );
}

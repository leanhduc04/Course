import { Chip as MantineChip, Box, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import LoginLayout from '../containers/LoginLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import { dataSelectInfo } from '../constants/dataSelect.constant';
import Link from 'next/link';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import CardSelectInfo from '../components/MyComponents/CardSelectInfo';

export default function SignUp1() {
  const theme = useMantineTheme();

  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Group position="apart" align="flex-start">
          <HistoryBack />
          <Stack spacing={16} align="center">
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
              Who Are You?
            </Text>
            <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
              Please tell us a little bit more about yourself and who you are.
            </Text>
          </Stack>
          <Box w={48} />
        </Group>
        <Stack justify="space-between" h="100%">
          <MantineChip.Group>
            <Stack spacing={32}>
              <CardSelectInfo data={dataSelectInfo} />
            </Stack>
          </MantineChip.Group>
          <Link href="/sign-up-2">
            <Button variant="filled" rightIcon={<IconRight />} w="100%">
              Continue
            </Button>
          </Link>
        </Stack>
      </Stack>
    </LoginLayout>
  );
}

import { Chip as MantineChip, Box, Group, Stack } from '@mantine/core';
import LoginLayout from '../containers/LoginLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import Link from 'next/link';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import CardSelectInfo from '../components/MyComponents/CardSelectInfo';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';
import { dataSelectInfo } from '../constants/dataSelect.constant';

export default function SignUp1() {
  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Group position="apart" align="flex-start">
          <HistoryBack />
          <Stack spacing={16} align="center">
            <Title order={2}>Who Are You?</Title>
            <Text w={336} fz={16} lh="26px" ta="center">
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

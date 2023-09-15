import { Chip as MantineChip, Box, Group, Stack } from '@mantine/core';
import LoginLayout from '../containers/LoginLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import Link from 'next/link';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import CardSelectField from '../components/MyComponents/CardSelectField';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';

export default function SignUp2() {
  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Group position="apart" align="flex-start">
          <HistoryBack />
          <Stack spacing={16} align="center">
            <Title order={2}>What Do You Like?</Title>
            <Text w={336} fz={16} lh="26px" ta="center">
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

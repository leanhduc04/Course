import { Box, Group, Stack } from '@mantine/core';
import LoginLayout from '../containers/LoginLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import Link from 'next/link';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import IconEmail from '../assets/Icon/IconEmail';
import TextInput from '../components/MantineCores/TextInput';
import PasswordInput from '../components/MantineCores/PasswordInput';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';

export default function SignUp3() {
  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Group position="apart" align="flex-start">
          <HistoryBack />
          <Stack spacing={16} align="center">
            <Title order={2}>Sign Up Now</Title>
            <Text w={336} fz={16} lh="26px" ta="center">
              Please provide us with this information in order to create an account.
            </Text>
          </Stack>
          <Box w={48} />
        </Group>
        <Stack justify="space-between" h="100%">
          <Stack spacing={32}>
            <TextInput label="Email Address" icon={<IconEmail />} placeholder="Email" />
            <PasswordInput label="Password" placeholder="Password" />
            <PasswordInput label="Confirm Password" placeholder="Confirm Password" />
          </Stack>
          <Link href="/sign-in">
            <Button variant="filled" rightIcon={<IconRight />} w="100%">
              Create Account
            </Button>
          </Link>
        </Stack>
      </Stack>
    </LoginLayout>
  );
}

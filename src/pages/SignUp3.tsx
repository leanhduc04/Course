import { Box, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import LoginLayout from '../containers/LoginLayout';
import HistoryBack from '../components/MyComponents/HistoryBack';
import Link from 'next/link';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import IconEmail from '../assets/Icon/IconEmail';
import TextInput from '../components/MantineCores/TextInput';
import PasswordInput from '../components/MantineCores/PasswordInput';

export default function SignUp3() {
  const theme = useMantineTheme();

  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Group position="apart" align="flex-start">
          <HistoryBack />
          <Stack spacing={16} align="center">
            <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
              Sign Up Now
            </Text>
            <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
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

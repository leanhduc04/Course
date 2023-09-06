import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import TextInput from '../components/MantineCores/TextInput';
import IconEmail from '../assets/Icon/IconEmail';
import PasswordInput from '../components/MantineCores/PasswordInput';
import Button from '../components/MantineCores/Button';
import IconRight from '../assets/Icon/IconRight';
import LoginLayout from '../containers/LoginLayout';

export default function SignIn() {
  const theme = useMantineTheme();

  return (
    <LoginLayout>
      <Stack spacing={48}>
        <Stack spacing={16} align="center">
          <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
            Login Now
          </Text>
          <Text w={336} fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
            Please enter your information below in order to login to your account.
          </Text>
        </Stack>
        <Stack justify="space-between" h="100%">
          <Stack spacing={32}>
            <TextInput label="Email Address" icon={<IconEmail />} placeholder="Email" />
            <PasswordInput
              label={
                <Group position="apart">
                  <Text>Password</Text>
                  <Link href="" style={{ textDecoration: 'none' }}>
                    <Text fw={600} fz={14} lh="24px" c={theme.colors.darkText[0]}>
                      Forgot Password?
                    </Text>
                  </Link>
                </Group>
              }
              placeholder="Password"
            />
          </Stack>
          <Stack spacing={24}>
            <Link href="/">
              <Button variant="filled" rightIcon={<IconRight />} w="100%">
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="light" rightIcon={<IconRight />} w="100%">
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </LoginLayout>
  );
}

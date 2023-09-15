import { Group, Stack, useMantineTheme } from '@mantine/core';
import NextImage from './NextImage';
import IconRight from '../../assets/Icon/IconRight';
import useBreakpoint from '../../hooks/useBreakpoint';
import Text from '../MantineCores/Text';

interface cardUserProps {
  src: string;
  name: string;
  email: string;
}

export default function CardUser({ src, name, email }: cardUserProps) {
  const theme = useMantineTheme();
  const { isDesktop } = useBreakpoint();

  return (
    <Group
      spacing={20}
      sx={{
        padding: isDesktop ? 24 : '0px 36px',
        borderRadius: 32,
        border: isDesktop ? `1px solid ${theme.colors.light[1]}` : 'none',
      }}
    >
      <NextImage src={src} alt="avatar" width={48} height={48} style={{ borderRadius: 48 }} />
      {isDesktop && (
        <Group spacing={14}>
          <Stack spacing={4} w={156}>
            <Text fw={600} fz={16} lh="24px" type="primary">
              {name}
            </Text>
            <Text fw={400} fz={12} lh="16px" type="secondary">
              {email}
            </Text>
          </Stack>
          <IconRight />
        </Group>
      )}
    </Group>
  );
}

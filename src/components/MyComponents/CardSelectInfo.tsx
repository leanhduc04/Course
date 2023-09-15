import { Center, Chip, Stack, useMantineTheme } from '@mantine/core';
import useBreakpoint from '../../hooks/useBreakpoint';
import Title from '../MantineCores/Title';
import Text from '../MantineCores/Text';

interface Data {
  icon: any;
  title: string;
  des: string;
  color: string;
}

interface cardSelectProps {
  data: Data[];
}

export default function CardSelectInfo({ data }: cardSelectProps) {
  const theme = useMantineTheme();
  const { isDesktop } = useBreakpoint();

  return (
    <>
      {data.map((item, index) => (
        <Chip
          value={item.title}
          key={index}
          styles={{
            label: {
              background: 'transparent',

              height: 240,
              width: isDesktop ? 624 : 672,

              padding: 0,

              borderRadius: 32,
              border: `1px solid ${theme.colors.light[1]}`,

              ...theme.fn.hover({
                background: 'transparent',
              }),

              '&[data-checked]': {
                padding: 0,
              },

              '&[data-checked]:not([data-disabled])': {
                border: `2px solid ${item.color}`,
              },
            },

            iconWrapper: {
              display: 'none',
            },
          }}
        >
          <Stack spacing={24} align="center" justify="center" h="100%" w="100%">
            <Center
              w={60}
              h={60}
              sx={{
                background: item.color,
                borderRadius: '50%',
                border: `1px solid ${theme.colors.light[1]}`,
              }}
            >
              <item.icon />
            </Center>
            <Stack spacing={8} align="center">
              <Title order={3}>{item.title}</Title>
              <Text>{item.des}</Text>
            </Stack>
          </Stack>
        </Chip>
      ))}
    </>
  );
}

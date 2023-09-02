import { Group, Progress as MantineProgress, Text, useMantineTheme } from '@mantine/core';

interface progressProps {
  value: number;
  color: string;
}

export default function Progress({ value, color }: progressProps) {
  const theme = useMantineTheme();

  return (
    <Group position="apart">
      <MantineProgress
        value={value}
        styles={{
          root: {
            background: theme.colors.light[1],

            width: 198,

            borderRadius: 4,
            border: `1px solid ${theme.colors.light[1]}`,

            [theme.fn.smallerThan('1440')]: {
              width: 298,
            },
          },
          bar: { background: `${color}` },
        }}
      />
      <Text fw={500} fz={12} lh="16px" c={theme.colors.darkText[0]}>
        {value}%
      </Text>
    </Group>
  );
}

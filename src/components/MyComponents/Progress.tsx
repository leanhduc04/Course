import { Progress as MantineProgress, SimpleGrid, Text, useMantineTheme } from '@mantine/core';

interface progressProps {
  value: number;
  color: string;
}

export default function Progress({ value, color }: progressProps) {
  const theme = useMantineTheme();

  return (
    <SimpleGrid sx={{ gridTemplateColumns: '1fr 40px', alignItems: 'center' }}>
      <MantineProgress
        value={value}
        styles={{
          root: {
            background: theme.colors.light[1],

            borderRadius: 4,
            border: `1px solid ${theme.colors.light[1]}`,
          },
          bar: { background: `${color}` },
        }}
      />
      <Text fw={500} fz={12} lh="16px" c={theme.colors.darkText[0]} ta="right">
        {value}%
      </Text>
    </SimpleGrid>
  );
}

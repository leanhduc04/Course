import { ActionIcon, useMantineTheme } from '@mantine/core';
import IconLeft from '../../assets/Icon/IconLeft';

function goBack() {
  window.history.back();
}

export default function HistoryBack() {
  const theme = useMantineTheme();

  return (
    <ActionIcon
      onClick={goBack}
      sx={{
        height: 48,
        width: 48,
        borderRadius: '50%',
        border: `1px solid ${theme.colors.light[1]}`,

        ...theme.fn.hover({
          background: 'transparent',
        }),
      }}
    >
      <IconLeft />
    </ActionIcon>
  );
}

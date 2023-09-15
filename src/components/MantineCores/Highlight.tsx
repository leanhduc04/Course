import { HighlightProps, Highlight as MantineHighlight, useMantineTheme } from '@mantine/core';
import React from 'react';

interface MantineHighlightProps extends HighlightProps {
  children: string;
}

export default function Highlight({ children }: MantineHighlightProps) {
  const theme = useMantineTheme();

  return (
    <MantineHighlight
      fw={400}
      fz={14}
      lh="24px"
      c={theme.colors.darkText[1]}
      highlight={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
      highlightStyles={{
        fontWeight: 600,
        background: 'transparent',
        color: theme.colors.darkText[0],
      }}
    >
      {children}
    </MantineHighlight>
  );
}

import { Title as MantineTitle, TitleProps } from '@mantine/core';

export default function Title({ ...props }: TitleProps) {
  return <MantineTitle {...props} fw={600} fz={40} lh="48px" />;
}

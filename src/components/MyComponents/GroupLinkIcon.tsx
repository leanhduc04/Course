import { Group, useMantineTheme } from '@mantine/core';
import LinkIcon from './LinkIcon';
import IconSearch from '../../assets/Icon/IconSearch';
import IconBell from '../../assets/Icon/IconBell';

export default function GroupLinkIcon() {
  const theme = useMantineTheme();

  return (
    <Group
      spacing={16}
      sx={{ display: 'none', [theme.fn.smallerThan('1440')]: { display: 'flex' } }}
    >
      <LinkIcon href="/search">
        <IconSearch />
      </LinkIcon>
      <LinkIcon href="/notification">
        <IconBell />
      </LinkIcon>
    </Group>
  );
}

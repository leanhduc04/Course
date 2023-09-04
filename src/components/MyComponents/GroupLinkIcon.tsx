import { Group } from '@mantine/core';
import LinkIcon from './LinkIcon';
import IconSearch from '../../assets/Icon/IconSearch';
import IconBell from '../../assets/Icon/IconBell';

export default function GroupLinkIcon() {
  return (
    <Group spacing={16}>
      <LinkIcon href="/search">
        <IconSearch />
      </LinkIcon>
      <LinkIcon href="/notification">
        <IconBell />
      </LinkIcon>
    </Group>
  );
}

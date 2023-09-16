import { Box, Center, Group, ScrollArea, Stack } from '@mantine/core';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import Text from '../components/MantineCores/Text';
import RightLayout from '../containers/RightLayout';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import HistoryBack from '../components/MyComponents/HistoryBack';
import CardAchieve from '../components/MyComponents/CardAchieve';
import CardSetting from '../components/MyComponents/CardSetting';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconRight from '../assets/Icon/IconRight';
import NextImage from '../components/MyComponents/NextImage';
import Badge from '../components/MantineCores/Badge';
import useBreakpoint from '../hooks/useBreakpoint';
import { dataUser } from '../constants/dataUser.constant';
import { dataSetting } from '../constants/dataSetting.constant';
import { dataAchieve } from '../constants/dataAchieve.constant';

export default function Profile() {
  const { isTablet, isDesktop } = useBreakpoint();

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <Title order={1}>Profile ✨</Title>
          <GroupLinkIcon />
          {isTablet && (
            <LinkIcon href="/achieve" smallIcon>
              <IconRight />
            </LinkIcon>
          )}
        </Group>
        <Stack spacing={32} align="center">
          <Center sx={{ position: 'relative' }} h={218}>
            <NextImage
              src="/imgs/avatar.jpg"
              alt="avatar"
              width={176}
              height={176}
              style={{ borderRadius: '50%' }}
            />
            <Box sx={{ position: 'absolute', bottom: 0 }}>
              <Badge>Pro</Badge>
            </Box>
          </Center>
          <Stack spacing={6}>
            <Group spacing={0} position="center">
              <Title order={2}>{dataUser.name}</Title>
              <Title order={2}>💯</Title>
            </Group>
            <Text fz={16} lh="26px" ta="center">
              {dataUser.email}
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={32}>
          <Title order={2}>Settings ⚙️</Title>
          <ScrollArea h={350} styles={{ scrollbar: { display: 'none' } }}>
            <Stack spacing={32}>
              <CardSetting data={dataSetting} />
            </Stack>
          </ScrollArea>
        </Stack>
      </Stack>
      {isDesktop && (
        <Stack spacing={48}>
          <HistoryBack />
          <RightLayout title="Achievements 🏆">
            <CardAchieve data={dataAchieve} />
          </RightLayout>
        </Stack>
      )}
    </BaseLayout>
  );
}

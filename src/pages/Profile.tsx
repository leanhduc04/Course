import { Box, Center, Group, ScrollArea, Stack, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import BaseLayout from '../containers/BaseLayout';
import Title from '../components/MantineCores/Title';
import RightLayout from '../containers/RightLayout';
import GroupLinkIcon from '../components/MyComponents/GroupLinkIcon';
import HistoryBack from '../components/MyComponents/HistoryBack';
import CardAchieve from '../components/MyComponents/CardAchieve';
import CardSetting from '../components/MyComponents/CardSetting';
import LinkIcon from '../components/MyComponents/LinkIcon';
import IconRight from '../assets/Icon/IconRight';
import NextImage from '../components/MyComponents/NextImage';
import Badge from '../components/MantineCores/Badge';
import { dataUser } from '../constants/dataUser.constant';
import { dataSetting } from '../constants/dataSetting.constant';
import { dataAchieve } from '../constants/dataAchieve.constant';

export default function Profile() {
  const theme = useMantineTheme();

  const isDesktop = useMediaQuery('(min-width: 1440px)', true, {
    getInitialValueInEffect: false,
  });

  const { height } = useViewportSize();

  const heightChildren = isDesktop
    ? height - 64 - 48 - 410 - 32 - 32
    : height - 48 - 48 - 410 - 32 - 32;

  return (
    <BaseLayout>
      <Stack spacing={48}>
        <Group position="apart">
          <Title>Profile ✨</Title>
          <GroupLinkIcon />
          <Box sx={{ display: 'none', [theme.fn.smallerThan('1440')]: { display: 'flex' } }}>
            <LinkIcon href="/achieve" smallIcon>
              <IconRight />
            </LinkIcon>
          </Box>
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
              <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
                {dataUser.name}
              </Text>
              <Text fw={600} fz={24} lh="32px">
                💯
              </Text>
            </Group>
            <Text fw={400} fz={16} lh="26px" c={theme.colors.darkText[1]} ta="center">
              {dataUser.email}
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={32}>
          <Text fw={600} fz={24} lh="32px" c={theme.colors.darkText[0]}>
            Settings ⚙️
          </Text>
          <ScrollArea h={heightChildren} styles={{ scrollbar: { display: 'none' } }}>
            <Stack spacing={32}>
              <CardSetting data={dataSetting} />
            </Stack>
          </ScrollArea>
        </Stack>
      </Stack>
      <Stack spacing={48} sx={{ [theme.fn.smallerThan('1440')]: { display: 'none' } }}>
        <HistoryBack />
        <RightLayout title="Achievements 🏆">
          <CardAchieve data={dataAchieve} />
        </RightLayout>
      </Stack>
    </BaseLayout>
  );
}

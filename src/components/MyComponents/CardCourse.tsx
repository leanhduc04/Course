import { Card, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

import NextImage from './NextImage';

interface Data {
  src: string;
  title: string;
  des: string;
  time: string;
}

interface cardCourseProps {
  data: Data[];
}

export default function CardCourse({ data }: cardCourseProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Link key={index} href="/course" style={{ textDecoration: 'none' }}>
          <Card
            p={24}
            w={229}
            h="fit-content"
            radius={32}
            sx={{ border: `1px solid ${theme.colors.light[1]}` }}
          >
            <Card.Section mx={-24} sx={{ '&[data-first]': { marginTop: -24 } }}>
              <NextImage src={item.src} alt="course" height={137} />
            </Card.Section>
            <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]} pt={24}>
              -{item.time}
            </Text>
            <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]} pt={2} pb={6}>
              {item.title}
            </Text>
            <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
              {item.des}
            </Text>
          </Card>
        </Link>
      ))}
    </>
  );
}

import { Card, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

import NextImage from './NextImage';
import Title from '../MantineCores/Title';
import Text from '../MantineCores/Text';

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
            h={297}
            radius={32}
            sx={{ border: `1px solid ${theme.colors.light[1]}` }}
          >
            <Card.Section mx={-24} sx={{ '&[data-first]': { marginTop: -24 } }}>
              <NextImage src={item.src} alt="course" height={137} />
            </Card.Section>
            <Text pt={24}>-{item.time}</Text>
            <Title order={3} pt={2} pb={6}>
              {item.title}
            </Title>
            <Text>{item.des}</Text>
          </Card>
        </Link>
      ))}
    </>
  );
}

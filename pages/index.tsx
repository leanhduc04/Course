import IconCourse from '../src/assets/Icon/IconCourse';
import IconBell from '../src/assets/Icon/IconBell';
import BaseLayout from '../src/components/MyComponents/BaseLayout';
import CardLesson from '../src/components/MyComponents/CardLesson';
import CardCourse from '../src/components/MyComponents/CardCourse';
import Chip from '../src/components/MantineCores/Chip';
import CardSelect from '../src/components/MyComponents/CardSelect';

const dataLesson = [
  {
    title: 'jskak',
    time: 'djaklk',
    des: 'dầggg2',
    colorIcon: '#52C3FF',
    icon: IconCourse,
    colorProgress: '#52C3FF',
    valueProgress: 40,
  },
];

const dataCourse = [
  {
    title: 'dạlkakdk',
    des: 'dkalkakja',
    time: 'dkạlkjáklk',
    src: '/imgs/avatar.jpg',
  },
];

const dataSelect = [
  {
    title: 'Popular',
    icon: IconBell,
    color: '#52C3FF',
  },
];

export default function index() {
  return (
    <BaseLayout>
      <CardLesson data={dataLesson} />
      <CardCourse data={dataCourse} />
      <Chip color="#52C3FF">jsak</Chip>
      <CardSelect data={dataSelect} />
    </BaseLayout>
  );
}

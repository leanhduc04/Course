import IconCategory from '../assets/Icon/IconCategory';
import IconDiscover from '../assets/Icon/IconDiscover';
import IconHeart from '../assets/Icon/IconHeart';
import IconStar from '../assets/Icon/IconStar';
import IconUser from '../assets/Icon/IconUser';

export const dataSelect = [
  {
    value: 'new',
    icon: IconCategory,
    title: 'New',
  },
  {
    value: 'popular',
    icon: IconStar,
    title: 'Popular',
  },
  {
    value: 'free',
    icon: IconHeart,
    title: 'Free',
  },
  {
    value: 'pro',
    icon: IconDiscover,
    title: 'Pro',
  },
];

export const dataSelectInfo = [
  {
    title: 'Potential Student',
    des: 'You are planning to use our platform as a student to learn new skills.',
    icon: IconUser,
    color: '#52C3FF',
  },
  {
    title: 'Potential Tutor',
    des: 'You are planning to use our platform to teach the skills you already know.',
    icon: IconStar,
    color: '#FFDFD6',
  },
];

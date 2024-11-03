import type { SubjectType, FeedbackType } from '@/views/demos/landing/components/types';

import dataScience from '@/assets/images/element/data-science.svg';
import online from '@/assets/images/element/online.svg';
import engineering from '@/assets/images/element/engineering.svg';
import coding from '@/assets/images/element/coding.svg';
import profit from '@/assets/images/element/profit.svg';
import medical from '@/assets/images/element/medical.svg';
import home from '@/assets/images/element/home.svg';
import artist from '@/assets/images/element/artist.svg';

import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';

export const subjectList: SubjectType[] = [
  {
    title: 'Data Science',
    courses: 15,
    image: dataScience,
  },
  {
    title: 'Computer Science',
    courses: 22,
    image: online,
  },
  {
    title: 'Engineering',
    courses: 53,
    image: engineering,
  },
  {
    title: 'Web Development',
    courses: 25,
    image: coding,
  },
  {
    title: 'Marketing',
    courses: 20,
    image: profit,
  },
  {
    title: 'Medical',
    courses: 10,
    image: medical,
  },
  {
    title: 'Architecture',
    courses: 30,
    image: home,
  },
  {
    title: 'Art & Design',
    courses: 35,
    image: artist,
  },
];

export const customerFeedback: FeedbackType[] = [
  {
    name: 'Lori Stevens',
    avatar: avatar05,
    quote:
      'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
  },
  {
    name: 'Billy Vasquez',
    avatar: avatar07,
    quote:
      'Its enjoyment Moonlight newspaper up agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
  },
  {
    name: 'Carolyn Ortiz',
    avatar: avatar09,
    quote:
      'Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
  },
  {
    name: 'Carolyn Ortiz',
    avatar: avatar01,
    quote:
      'Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
  },
];

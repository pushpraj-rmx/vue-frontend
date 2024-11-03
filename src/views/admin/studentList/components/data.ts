import type { StudentType } from '@/types';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';

export const studentList: StudentType[] = [
  {
    name: 'Carolyn Ortiz',
    location: 'Mumbai',
    image: avatar01,
    payments: 6205,
    courses: 21,
    progress: 85,
    date: '29 Aug 2021',
  },
  {
    name: 'Billy Vasquez',
    location: 'Delhi',
    image: avatar04,
    payments: 1256,
    courses: 16,
    progress: 60,
    date: '15 July 2021',
  },
  {
    name: 'Dennis Barrett',
    location: 'New York',
    image: avatar03,
    payments: 9256,
    courses: 38,
    progress: 74,
    date: '22 June 2021',
  },
  {
    name: 'Lori Stevens',
    location: 'California',
    image: avatar09,
    payments: 10688,
    courses: 7,
    progress: 45,
    date: '18 April 2021',
  },
  {
    name: 'Jacqueline Miller',
    location: 'Chennai',
    image: avatar05,
    payments: 856,
    courses: 5,
    progress: 90,
    date: '05 Aug 2021',
  },
  {
    name: 'Samuel Bishop',
    location: 'Canada',
    image: avatar02,
    payments: 3578,
    courses: 14,
    progress: 30,
    date: '18 Jan 2021',
  },
];

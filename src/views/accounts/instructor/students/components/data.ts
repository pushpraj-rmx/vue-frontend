import type { StudentType } from '@/types';
import { currentYear } from '@/helpers/constants';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';

export const studentList: StudentType[] = [
  {
    name: 'Lori Stevens',
    image: avatar01,
    location: 'Mumbai',
    progress: 85,
    tasks: 10,
    date: '4/1/' + currentYear,
  },
  {
    name: 'Dennis Barrett',
    image: avatar03,
    location: 'New york',
    progress: 40,
    tasks: 12,
    date: '9/1/' + currentYear,
  },
  {
    name: 'Billy Vasquez',
    image: avatar04,
    location: 'Paris',
    progress: 62,
    tasks: 8,
    date: '10/1/' + currentYear,
  },
  {
    name: 'Carolyn Ortiz',
    image: avatar09,
    location: 'Delhi',
    progress: 60,
    tasks: 6,
    date: '20/1/' + currentYear,
  },
  {
    name: 'Larry Lawson',
    image: avatar07,
    location: 'London',
    progress: 35,
    tasks: 4,
    date: '12/1/' + currentYear,
  },
  {
    name: 'Frances Guerrero',
    image: avatar06,
    location: 'Pune',
    progress: 42,
    tasks: 14,
    date: '8/1/' + currentYear,
  },
];

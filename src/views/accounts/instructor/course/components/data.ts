import type { CourseType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';

export const courseList: CourseType[] = [
  {
    image: courses08,
    title: 'Building Scalable APIs with GraphQL',
    lectures: 18,
    completed: 6,
    student: 125,
    status: 'live',
    price: 250,
  },
  {
    image: courses10,
    title: 'Bootstrap 5 From Scratch',
    lectures: 0,
    completed: 0,
    student: 145,
    status: 'disable',
    price: 350,
  },
  {
    image: courses06,
    title: 'Angular – The Complete Guider',
    lectures: 37,
    completed: 20,
    student: 145,
    status: 'live',
    price: 652,
  },
  {
    image: courses02,
    title: 'Graphic Design Masterclass',
    lectures: 58,
    completed: 0,
    student: 0,
    status: 'applied',
    price: 245,
  },
  {
    image: courses04,
    title: 'Learn Invision',
    lectures: 16,
    completed: 0,
    student: 0,
    status: 'rejected',
    price: 365,
  },
  {
    image: courses03,
    title: 'Create a Design System in Figma',
    lectures: 25,
    completed: 0,
    student: 0,
    status: 'applied',
    price: 135,
  },
  {
    image: courses07,
    title: 'Deep Learning with React-Native',
    lectures: 18,
    completed: 10,
    student: 186,
    status: 'live',
    price: 256,
  },
  {
    image: courses11,
    title: 'Build Responsive Websites with HTML',
    lectures: 42,
    completed: 25,
    student: 345,
    status: 'live',
    price: 222,
  },
  {
    image: courses08,
    title: 'Building Scalable APIs with GraphQL',
    lectures: 18,
    completed: 6,
    student: 125,
    status: 'live',
    price: 250,
  }
];

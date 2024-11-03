import type { CourseType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';

export const coursesList: CourseType[] = [
  {
    image: courses08,
    title: 'Building Scalable APIs with GraphQL',
    instructor: {
      avatar: avatar09,
      name: 'Lori Stevens',
    },
    date: '28 Oct 2021',
    type: 'Beginner',
    price: 350,
    status: 'pending',
  },
  {
    image: courses10,
    title: 'Bootstrap 5 From Scratch',
    instructor: {
      avatar: avatar04,
      name: 'Billy Vasquez',
    },
    date: '16 Oct 2021',
    type: 'Intermediate',
    price: 256,
    status: 'pending',
  },
  {
    image: courses02,
    title: 'Graphic Design Masterclass',
    instructor: {
      avatar: avatar05,
      name: 'Carolyn Ortiz',
    },
    date: '28 Aug 2021',
    type: 'All level',
    price: 347,
    status: 'live',
  },
  {
    image: courses04,
    title: 'Learn Invision',
    instructor: {
      avatar: avatar06,
      name: 'Frances Guerrero',
    },
    date: '15 June 2021',
    type: 'All level',
    price: 445,
    status: 'live',
  },
  {
    image: courses06,
    title: 'Angular – The Complete Guider',
    instructor: {
      avatar: avatar07,
      name: 'Louis Ferguson',
    },
    date: '10 Dec 2020',
    type: 'Intermediate',
    price: 165,
    status: 'live',
  },
  {
    image: courses09,
    title: 'JavaScript: Full Understanding',
    instructor: {
      avatar: avatar08,
      name: 'Samuel Bishop',
    },
    date: '09 Nov 2020',
    type: 'Beginner',
    price: 575,
    status: 'live',
  },
  {
    image: courses11,
    title: 'Build Responsive Websites with HTML',
    instructor: {
      avatar: avatar02,
      name: 'Dennis Barrett',
    },
    date: '21 Aug 2020',
    type: 'Beginner',
    price: 268,
    status: 'live',
  },
  {
    image: courses12,
    title: 'Build Websites with CSS',
    instructor: {
      avatar: avatar03,
      name: 'Joan Wallace',
    },
    date: '02 April 2020',
    type: 'All level',
    price: 370,
    status: 'live',
  },
];

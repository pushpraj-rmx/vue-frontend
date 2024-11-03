import type { CategoryType } from '@/views/admin/courses/category/components/types';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';

export const categoryList: CategoryType[] = [
  {
    image: courses08,
    title: 'Building Scalable APIs with GraphQL',
    instructor: {
      avatar: avatar09,
      name: 'Lori Stevens',
    },
    rating: 4.5,
    students: 15567,
  },
  {
    image: courses10,
    title: 'Bootstrap 5 From Scratch',
    instructor: {
      avatar: avatar04,
      name: 'Billy Vasquez',
    },
    rating: 4.5,
    students: 16584,
  },
  {
    image: courses02,
    title: 'Graphic Design Masterclass',
    instructor: {
      avatar: avatar05,
      name: 'Carolyn Ortiz',
    },
    rating: 3.5,
    students: 6458,
  },
  {
    image: courses04,
    title: 'Learn Invision',
    instructor: {
      avatar: avatar06,
      name: 'Frances Guerrero',
    },
    rating: 5,
    students: 20158,
  },
  {
    image: courses09,
    title: 'JavaScript: Full Understanding',
    instructor: {
      avatar: avatar08,
      name: 'Samuel Bishop',
    },
    rating: 4.5,
    students: 5325,
  },
  {
    image: courses11,
    title: 'Build Responsive Websites with HTML',
    instructor: {
      avatar: avatar02,
      name: 'Dennis Barrett',
    },
    rating: 4.5,
    students: 8258,
  },
  {
    image: courses12,
    title: 'Build Websites with CSS',
    instructor: {
      avatar: avatar03,
      name: 'Joan Wallace',
    },
    rating: 5,
    students: 17654,
  },
];

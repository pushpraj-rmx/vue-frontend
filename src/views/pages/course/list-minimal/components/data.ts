import type { ProductType } from '@/types';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses05 from '@/assets/images/courses/4by3/05.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';
import courses13 from '@/assets/images/courses/4by3/13.jpg';

export const productData: ProductType[] = [
  {
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    image: courses01,
    isLike: true,
    duration: '6h 56m',
    lectures: 82,
    level: 'Beginner',
    rating: 4.5,
  },
  {
    title: 'Graphic Design Masterclass',
    image: courses02,
    isLike: false,
    duration: '9h 56m',
    lectures: 65,
    level: 'All level',
    rating: 4.0,
  },
  {
    title: 'Create a Design System in Figma',
    image: courses03,
    isLike: false,
    duration: '7h 16m',
    lectures: 32,
    level: 'Intermediate',
    rating: 4.0,
  },
  {
    title: 'The Complete Web Development in python',
    image: courses05,
    isLike: true,
    duration: '7h 16m',
    lectures: 32,
    level: 'Intermediate',
    rating: 4.0,
  },
  {
    title: 'Angular – The Complete Guider',
    image: courses06,
    isLike: false,
    duration: '21h 16m',
    lectures: 68,
    level: 'All level',
    rating: 4.5,
  },
  {
    title: 'Deep Learning with React-Native',
    image: courses07,
    isLike: false,
    duration: '10h 16m',
    lectures: 21,
    level: 'Advance',
    rating: 3.5,
  },
  {
    title: 'JavaScript: Full Understanding',
    image: courses09,
    isLike: true,
    duration: '7h 16m',
    lectures: 12,
    level: 'Beginner',
    rating: 4.0,
  },
  {
    title: 'Build Responsive Websites with HTML',
    image: courses11,
    isLike: false,
    duration: '15h 16m',
    lectures: 38,
    level: 'All level',
    rating: 4.0,
  },
  {
    title: 'Build Websites with CSS',
    image: courses12,
    isLike: false,
    duration: '22h 16m',
    lectures: 16,
    level: 'Advance',
    rating: 4.5,
  },
  {
    title: 'PHP with - CMS Project',
    image: courses13,
    isLike: true,
    duration: '10h 16m',
    lectures: 9,
    level: 'Intermediate',
    rating: 4.5,
  },
];

import type { ProductType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';
import courses05 from '@/assets/images/courses/4by3/05.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';

export const productList: ProductType[] = [
  {
    image: courses08,
    badge: {
      text: 'All level',
      class: 'purple',
    },
    title: 'Sketch from A to Z: for app designer',
    description: 'Proposal indulged no do sociable he throwing settling.',
    rating: 4.0,
    duration: '12h 56m',
    lectures: 15,
  },
  {
    image: courses02,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    title: 'Graphic Design Masterclass',
    isLike: true,
    description:
      'Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms',
    rating: 4.5,
    duration: '9h 56m',
    lectures: 65,
  },
  {
    image: courses03,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    title: 'Create a Design System in Figma',
    description:
      'Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.',
    rating: 4.5,
    duration: '5h 56m',
    lectures: 32,
  },
  {
    image: courses07,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    title: 'Deep Learning with React-Native',
    isLike: true,
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
  },
  {
    image: courses11,
    badge: {
      text: 'All level',
      class: 'purple',
    },
    title: 'Build Responsive Websites with HTML',
    isLike: true,
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.0,
    duration: '15h 30m',
    lectures: 68,
  },
  {
    image: courses12,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    title: 'Build Websites with CSS',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.5,
    duration: '36h 30m',
    lectures: 72,
  },
  {
    image: courses05,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    title: 'The Complete Web Development in python',
    description: 'Mention Mr manners opinion if garrets enabled.',
    rating: 4.5,
    duration: '10h 00m',
    lectures: 26,
  },
  {
    image: courses06,
    badge: {
      text: 'Intermediate',
      class: 'info',
    },
    title: 'Angular – The Complete Guider',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end.',
    rating: 4.5,
    duration: '9h 32m',
    lectures: 42,
  },
  {
    image: courses10,
    badge: {
      text: 'Intermediate',
      class: 'info',
    },
    title: 'Bootstrap 5 From Scratch',
    isLike: true,
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.5,
    duration: '25h 56m',
    lectures: 38,
  }
];

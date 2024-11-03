import type { ProductType } from '@/types';

import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';

import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';

export const productData: ProductType[] = [
  {
    image: courses06,
    ribbon: 'Free',
    badge: {
      text: 'Development',
      class: ''
    },
    rating: 4.5,
    isLike: true,
    title: 'Angular – The Complete Guider',
    description:
      'Satisfied conveying a dependent contented he gentleman agreeable do be. dependent contented he',
    duration: '21h 56m',
    lectures: 52,
    level: 'Intermediate',
    instructor: {
      name: 'Jacqueline Miller',
      avatar: avatar06,
    },
  },
  {
    image: courses01,
    badge: {
      text: 'Marketing',
      class: ''
    },
    rating: 4.5,
    isLike: false,
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    description:
      'Explained propriety off out perpetual his you. Dependent contented he explained propriety off out perpetual his you.',
    duration: '6h 56m',
    lectures: 82,
    level: 'Beginner',
    instructor: {
      name: 'Larry Lawson',
      avatar: avatar10,
    },
  },
  {
    image: courses11,
    badge: {
      text: 'Development',
      class: ''
    },
    rating: 4.8,
    isLike: false,
    title: 'The Ultimate Copywriting Course - Write Copy That Sells',
    description:
      'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor.',
    duration: '15h 30m',
    lectures: 72,
    level: 'All level',
    instructor: {
      name: 'Louis Crawford',
      avatar: avatar04,
    },
  },
  {
    image: courses03,
    badge: {
      text: 'Design',
      class: ''
    },
    rating: 4.0,
    isLike: false,
    title: 'Create a Design System in Figma',
    description:
      'Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing.',
    duration: '7h 50m',
    lectures: 21,
    level: 'All level',
    instructor: {
      name: 'Frances Guerrero',
      avatar: avatar09,
    },
  },
];

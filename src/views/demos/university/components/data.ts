import type { CollegeType, EventType } from '@/views/demos/university/components/types';

import university02 from '@/assets/images/university/02.jpg';
import university04 from '@/assets/images/university/04.jpg';
import university01 from '@/assets/images/university/01.jpg';
import university03 from '@/assets/images/university/03.jpg';

import unilogo01 from '@/assets/images/client/uni-logo-01.svg';
import unilogo03 from '@/assets/images/client/uni-logo-03.svg';
import unilogo02 from '@/assets/images/client/uni-logo-02.svg';

import courses21 from '@/assets/images/courses/4by3/21.jpg';
import courses16 from '@/assets/images/courses/4by3/16.jpg';
import courses18 from '@/assets/images/courses/4by3/18.jpg';
import courses17 from '@/assets/images/courses/4by3/17.jpg';
import courses19 from '@/assets/images/courses/4by3/19.jpg';

export const collegeData: CollegeType[] = [
  {
    image: university02,
    logo: unilogo01,
    status: 'Closed',
    type: 'Private',
    rating: 4.5,
    name: 'American Century University, New Mexico',
    location: '4502 Colonial Drive Anderson, IN',
    programs: ['BSC', 'BBA', 'Engineer', 'BCA', 'MBBS'],
    facilities: ['Canteen', 'Stationary', 'Hostel', 'Library', 'Playground'],
  },
  {
    image: university04,
    logo: unilogo03,
    status: 'Open',
    type: 'Public',
    rating: 4.5,
    name: 'Indiana College of - Bloomington',
    location: 'Bloomington, IN',
    programs: ['MBBS', 'Engineer', 'BBA', 'BCA', 'BSC'],
    facilities: ['Playground', 'Library', 'Canteen', 'Stationary', 'Hostel'],
  },
  {
    image: university01,
    logo: unilogo02,
    status: 'Open',
    type: 'Private',
    rating: 4.0,
    name: 'College of South Florida',
    location: '4653 Linda Street Newark, PA',
    programs: ['BBA', 'BCA', 'BSC', 'Engineer'],
    facilities: ['Gym', 'Stationary', 'Playground', 'Canteen', 'Library', 'Hostel'],
  },
  {
    image: university03,
    logo: unilogo01,
    status: 'Closed',
    type: 'Public',
    rating: 4.5,
    name: 'Andeerson Campus',
    location: '4502 Colonial Drive Anderson, IN',
    programs: ['Engineer', 'BBA', 'BCA', 'BSC', 'MBBS'],
    facilities: ['Library', 'Canteen', 'Stationary', 'Hostel', 'Playground'],
  },
];

export const eventsList: EventType[] = [
  {
    image: courses21,
    date: '29 September 2021',
    title: 'Global Education Fall Meeting for Everyone',
    description: 'Satisfied conveying a dependent contented he gentleman agreeable do be.',
    isWishlist: true
  },
  {
    image: courses16,
    date: 'Tomorrow',
    title: 'International Conference on Information Technology',
    description: 'Kindness owns whatever betrayed her moreover procured replying for and. Proposal indulged no do.',
    isWishlist: false
  },
  {
    image: courses18,
    date: '2 July 2022',
    title: 'UK Demo Day 2022',
    description: 'Points afraid but may end law lasted. Rooms oh fully taken by worse do may end law lasted.',
    isWishlist: false
  },
  {
    image: courses17,
    date: '29 September 2021',
    title: 'Personality Development Tour',
    description: 'Yet remarkably appearance get him his projection. Diverted endeavor bed peculiar',
    isWishlist: true
  },
  {
    image: courses19,
    date: 'Live',
    title: 'Global Education Fall Meeting for Everyone',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end law lasted',
    isWishlist: false
  },
];

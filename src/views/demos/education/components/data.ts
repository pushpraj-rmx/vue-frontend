import type { EventType, TrendingType } from '@/views/demos/education/components/types';

import courses14 from '@/assets/images/courses/4by3/14.jpg';
import courses15 from '@/assets/images/courses/4by3/15.jpg';
import courses16 from '@/assets/images/courses/4by3/16.jpg';
import courses17 from '@/assets/images/courses/4by3/17.jpg';
import courses18 from '@/assets/images/courses/4by3/18.jpg';
import courses19 from '@/assets/images/courses/4by3/19.jpg';
import courses20 from '@/assets/images/courses/4by3/20.jpg';
import courses21 from '@/assets/images/courses/4by3/21.jpg';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar11 from '@/assets/images/avatar/11.jpg';
import avatar12 from '@/assets/images/avatar/12.jpg';

export const trendingCourses: TrendingType[] = [
  {
    image: courses17,
    students: '9.1k',
    rating: '4.5',
    avatar: avatar09,
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    category: 'Personal Development',
    price: 140,
  },
  {
    image: courses18,
    students: '2.5k',
    rating: '3.6',
    avatar: avatar07,
    title: 'Fundamentals of Business Analysis',
    category: 'Business Development',
    price: 160,
  },
  {
    image: courses21,
    students: '6k',
    rating: '3.8',
    avatar: avatar05,
    title: 'Google Ads Training: Become a PPC Expert',
    category: 'SEO',
    price: 226,
  },
  {
    image: courses20,
    students: '15k',
    rating: '4.8',
    avatar: avatar02,
    title: 'Behavior, Psychology and Care Training',
    category: 'Lifestyle',
    price: 342,
  },
  {
    image: courses15,
    students: '8k',
    rating: '3.6',
    avatar: avatar11,
    title: 'Microsoft Excel - Excel from Beginner to Advanced',
    category: 'Technology',
    price: 245,
  },
  {
    image: courses14,
    students: '4k',
    rating: '4.0',
    avatar: avatar12,
    title: 'Twitter Marketing & Twitter Ads For Beginners',
    category: 'Technology',
    price: 199,
  },
];

export const eventsList: EventType[] = [
  {
    image: courses21,
    date: '29 September 2021',
    title: 'Global Education Fall Meeting for Everyone',
    location: 'Mumbai',
  },
  {
    image: courses16,
    date: 'Tomorrow',
    title: 'International Conference on Information Technology',
    location: 'New York',
  },
  {
    image: courses18,
    date: '2 July 2022',
    title: 'UK Demo Day 2022',
    location: 'California',
  },
  {
    image: courses17,
    date: '29 September 2021',
    title: 'Personality Development Tour',
    location: 'London',
  },
  {
    image: courses19,
    date: 'Live',
    title: 'Global Education Fall Meeting for Everyone',
    location: 'Delhi',
  },
];

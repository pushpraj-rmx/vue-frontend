import type { CourseType, InstructorType } from '@/types';

import instructor02 from '@/assets/images/instructor/02.jpg';
import instructor01 from '@/assets/images/instructor/01.jpg';
import instructor08 from '@/assets/images/instructor/08.jpg';
import instructor04 from '@/assets/images/instructor/04.jpg';
import instructor03 from '@/assets/images/instructor/03.jpg';

import courses16 from '@/assets/images/courses/4by3/16.jpg';
import courses14 from '@/assets/images/courses/4by3/14.jpg';
import courses21 from '@/assets/images/courses/4by3/21.jpg';

import avatar10 from '@/assets/images/avatar/10.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';

export const courseList: CourseType[] = [
  {
    image: courses16,
    instructor: {
      avatar: avatar10,
      name: 'Larry Lawson',
      role: 'Tutor',
    },
    badges: [
      {
        text: 'All level',
        class: 'bg-orange bg-opacity-10 text-orange',
      },
      { text: '6 month', class: 'text-bg-dark' },
    ],
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    rating: 4.5,
    reviews: 6500,
    price: 125,
    duration: '6h 56m',
    isLike: false
  },
  {
    image: courses14,
    instructor: {
      avatar: avatar08,
      name: 'Billy Vasquez',
      role: 'Developer',
    },
    badges: [
      {
        text: 'Beginner',
        class: 'bg-info bg-opacity-10 text-info',
      },
      { text: '8 month', class: 'text-bg-dark' },
    ],
    title: 'Angular – The Complete Guide (2021 Edition)',
    rating: 4.5,
    reviews: 5436,
    price: 355,
    duration: '12h 56m',
    isLike: true
  },
  {
    image: courses21,
    instructor: {
      avatar: avatar05,
      name: 'Lori Stevens',
      role: 'Psychiatrist',
    },
    badges: [
      {
        text: 'Beginner',
        class: 'bg-info bg-opacity-10 text-info',
      },
      { text: '12 month', class: 'text-bg-dark' },
    ],
    title: 'Time Management Mastery: Do More, Stress Less',
    rating: 3.5,
    reviews: 1254,
    price: 280,
    duration: '5h 40m',
    isLike: false
  },
];

export const instructorList: InstructorType[] = [
  {
    image: instructor02,
    students: 25,
    clipboard: 15,
    name: 'Jacqueline Miller',
    description: 'Computer Teacher',
    rating: 4.5
  },
  {
    image: instructor01,
    students: 118,
    clipboard: 9,
    name: 'Samuel Bishop',
    description: 'Marketing Teacher',
    rating: 4.5
  },
  {
    image: instructor08,
    students: 92,
    clipboard: 38,
    name: 'Dennis Barrett',
    description: 'Science Teacher',
    rating: 4.5
  },
  {
    image: instructor04,
    students: 82,
    clipboard: 5,
    name: 'Carolyn Ortiz',
    description: 'Economy Teacher',
    rating: 4.5
  },
  {
    image: instructor03,
    students: 50,
    clipboard: 10,
    name: 'Billy Vasquez',
    description: 'Computer Teacher',
    rating: 4.5
  },
];

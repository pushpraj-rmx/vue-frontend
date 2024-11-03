import type { InstructorType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import instructor02 from '@/assets/images/instructor/02.jpg';
import instructor01 from '@/assets/images/instructor/01.jpg';
import instructor08 from '@/assets/images/instructor/08.jpg';
import instructor04 from '@/assets/images/instructor/04.jpg';
import instructor03 from '@/assets/images/instructor/03.jpg';

export const instructorCourses: InstructorType[] = [
  {
    image: courses08,
    badge: {
      text: 'All level',
      class: 'purple',
    },
    favorite: false,
    title: 'Sketch from A to Z: for app designer',
    description: 'Proposal indulged no do sociable he throwing settling',
    rating: 4.0,
    duration: '12h 56m',
    lecture: 15,
  },
  {
    image: courses02,
    badge: {
      text: 'Intermediate',
      class: 'info',
    },
    favorite: true,
    title: 'Graphic Design Masterclass',
    description:
      'Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms',
    rating: 4.5,
    duration: '9h 56m',
    lecture: 65,
  },
  {
    image: courses03,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    favorite: false,
    title: 'Create a Design System in Figma',
    description:
      'Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.',
    rating: 4.5,
    duration: '5h 56m',
    lecture: 32,
  },
  {
    image: courses07,
    badge: {
      text: 'Beginner',
      class: 'success',
    },
    favorite: true,
    title: 'Deep Learning with React-Native',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther..',
    rating: 4.0,
    duration: '18h 56m',
    lecture: 99,
  },
];

export const relatedInstructor: InstructorType[] = [
  {
    image: instructor02,
    students: 25,
    lecture: 15,
    name: 'Jacqueline Miller',
    title: 'Web Developer',
    rating: 4.5,
  },
  {
    image: instructor01,
    students: 118,
    lecture: 9,
    name: 'Samuel Bishop',
    title: 'Marketing Instructor',
    rating: 4.5,
  },
  {
    image: instructor08,
    students: 92,
    lecture: 38,
    name: 'Dennis Barrett',
    title: 'Maths Instructor',
    rating: 4.5,
  },
  {
    image: instructor04,
    students: 82,
    lecture: 5,
    name: 'Carolyn Ortiz',
    title: 'Economics Teacher',
    rating: 4.5,
  },
  {
    image: instructor03,
    students: 50,
    lecture: 10,
    name: 'Billy Vasquez',
    title: 'UI/UX Designer',
    rating: 4.5,
  },
];

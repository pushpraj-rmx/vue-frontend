import type { CourseType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses05 from '@/assets/images/courses/4by3/05.jpg';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';

export const myCourses: CourseType[] = [
  {
    title: 'Building Scalable APIs with GraphQL',
    image: courses08,
    progress: 85,
    lectures: 56,
    completed: 40,
  },
  {
    title: 'Create a Design System in Figma',
    image: courses03,
    progress: 100,
    lectures: 42,
    completed: 42,
  },
  {
    title: 'The Complete Web Development in Python',
    image: courses05,
    progress: 60,
    lectures: 28,
    completed: 12,
  },
  {
    title: 'Digital Marketing Masterclass',
    image: courses01,
    progress: 40,
    lectures: 32,
    completed: 18,
  },
  {
    title: 'Graphic Design Masterclass',
    image: courses02,
    progress: 90,
    lectures: 16,
    completed: 14,
  },
  {
    title: 'Building Scalable APIs with GraphQL',
    image: courses08,
    progress: 75,
    lectures: 76,
    completed: 50,
  },
];

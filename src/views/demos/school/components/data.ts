import type { SubjectType, BlogType } from '@/views/demos/school/components/types';

import primarySchool from '@/assets/images/element/primary-school.svg';
import middleSchool from '@/assets/images/element/middle-school.svg';
import highSchool from '@/assets/images/element/high-school.svg';
import exam from '@/assets/images/element/exam.svg';

export const subjectList: SubjectType[] = [
  {
    background: 'warning',
    gradeRange: '1st to 6th grades',
    title: 'Primary school',
    lessons: 35,
    image: primarySchool,
  },
  {
    background: 'purple',
    gradeRange: '7th to 10th grades',
    title: 'Middle school',
    lessons: 54,
    image: middleSchool,
  },
  {
    background: 'orange',
    gradeRange: '11th to 12th grades',
    title: 'High school',
    lessons: 70,
    image: highSchool,
  },
  {
    background: 'info',
    gradeRange: '11th to 12th grades',
    title: 'Exams',
    lessons: 120,
    image: exam,
  },
];

export const blogList: BlogType[] = [
  {
    date: 15,
    month: 'Jan 2022',
    title: '12 worst types of business accounts you follow on Twitter',
    author: 'Jacqueline Miller',
  },
  {
    date: 12,
    month: 'Jan 2022',
    title: 'How 10 worst business fails of all time could have been prevented',
    author: 'Frances Guerrero',
  },
  {
    date: 9,
    month: 'Jan 2022',
    title: 'Never underestimate the influence of social media',
    author: 'Louis Ferguson',
  },
];

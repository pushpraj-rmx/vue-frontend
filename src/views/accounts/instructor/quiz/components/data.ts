import type { CourseType, StudentQuizType } from '@/views/accounts/instructor/quiz/components/types';
import { currentYear } from '@/helpers/constants';

import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar03 from '@/assets/images/avatar/03.jpg'
import avatar04 from '@/assets/images/avatar/04.jpg'
import avatar09 from '@/assets/images/avatar/09.jpg'
import avatar07 from '@/assets/images/avatar/07.jpg'
import avatar06 from '@/assets/images/avatar/06.jpg'

export const courses: CourseType[] = [
  {
    id: '01',
    question: 'How do you protect your business against cyber-crime?',
  },
  {
    id: '02',
    question: 'What is SEO?',
  },
  {
    id: '03',
    question: 'Who should join this course?',
  },
  {
    id: '04',
    question: 'What are the T&C for this program?',
  },
];

export const studentQuiz: StudentQuizType[] = [
  {
    name: 'Lori Stevens',
    image: avatar01,
    course: 'The complete Digital Marketing Courses - 12 Course in 1',
    date: '7/1/' + currentYear,
    progress: 450,
  },
  {
    name: 'Dennis Barrett',
    image: avatar03,
    course: 'The complete Digital Marketing Courses - 12 Course in 1',
    date: '6/1/' + currentYear,
    progress: 425,
  },
  {
    name: 'Billy Vasquez',
    image: avatar04,
    course: 'The complete Digital Marketing Courses - 12 Course in 1',
    date: '5/1/' + currentYear,
    progress: 385,
  },
  {
    name: 'Carolyn Ortiz',
    image: avatar09,
    course: 'The complete Digital Marketing Courses - 12 Course in 1',
    date: '5/1/' + currentYear,
    progress: 398,
  },
  {
    name: 'Larry Lawson',
    image: avatar07,
    course: 'The complete Digital Marketing Courses - 12 Course in 1',
    date: '4/1/' + currentYear,
    progress: 428,
  },
  {
    name: 'Frances Guerrero',
    image: avatar06,
    course: 'The complete Digital Marketing Courses - 12 Course in 1',
    date: '4/1/' + currentYear,
    progress: 486,
  },
];

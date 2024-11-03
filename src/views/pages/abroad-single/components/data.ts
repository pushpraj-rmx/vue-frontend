import type { IntakeListType, UniversityListType } from '@/views/pages/abroad-single/components/types';

import unilogo03 from '@/assets/images/client/uni-logo-03.svg';
import unilogo01 from '@/assets/images/client/uni-logo-01.svg';
import unilogo02 from '@/assets/images/client/uni-logo-02.svg';
import unilogo04 from '@/assets/images/client/uni-logo-04.svg';

export const intakeList: IntakeListType[] = [
  {
    intake: 'Winter Semester',
    months: 'November / December',
    deadline: 'Jun / July',
  },
  {
    intake: 'Spring Semester',
    months: 'January / February',
    deadline: 'August / September',
  },
  {
    intake: 'Summer Semester',
    months: 'April / May',
    deadline: 'October / November',
  },
  {
    intake: 'Fall Semester',
    months: 'August / September',
    deadline: 'March / April',
  },
];

export const universityList: UniversityListType[] = [
  {
    name: 'College of Toronto',
    description: 'A Public University In Toronto, Canada',
    logo: unilogo03,
  },
  {
    name: 'Indiana College of - Montreal',
    description: 'A Public University In Montreal, Canada',
    logo: unilogo01,
  },
  {
    name: 'University Of British Columbia',
    description: 'University In Vancouver, Canada',
    logo: unilogo02,
  },
  {
    name: 'Andeerson Campus',
    description: 'A Public University In Canada',
    logo: unilogo04,
  },
];

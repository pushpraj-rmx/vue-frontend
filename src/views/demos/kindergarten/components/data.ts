import type { CourseType } from '@/types';

import abc from '@/assets/images/element/abc.svg';
import lego from '@/assets/images/element/lego.svg';
import sport from '@/assets/images/element/sport.svg';
import song from '@/assets/images/element/song.svg';

import about19 from '@/assets/images/about/19.jpg';
import about20 from '@/assets/images/about/20.jpg';
import about17 from '@/assets/images/about/17.jpg';
import about21 from '@/assets/images/about/21.jpg';
import about18 from '@/assets/images/about/18.jpg';
import about16 from '@/assets/images/about/16.jpg';
import about23 from '@/assets/images/about/23.jpg';
import about22 from '@/assets/images/about/22.jpg';

export const courseList: CourseType[] = [
  {
    image: abc,
    title: 'Preschool',
    description: 'Man children rejoiced. Yet uncommonly his ten.',
    courses: 5,
  },
  {
    image: lego,
    title: 'Nursery',
    description:
      'Children rejoiced. Yet uncommonly his ten. certainly day sweetness why cordially',
    courses: 8,
  },
  {
    image: sport,
    title: 'Sports',
    description:
      'Yet uncommonly his ten. certainly day sweetness why cordially',
    courses: 6,
  },
  {
    image: song,
    title: 'Music',
    description:
      'Certainly day sweetness why cordial Man children rejoiced. Yet uncommonly his ten.',
    courses: 7,
  },
];

export const portfolioList = [about19, about20, about17, about21, about18, about16, about23, about22];

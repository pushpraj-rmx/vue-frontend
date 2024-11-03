import type { ApexChartType, ReviewType } from '@/types';
import type { TopRatedRType } from '@/views/admin/reviews/components/types';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';

const ThemeColor = (e: any) => {
  let t = getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.length > 0 && (t = t.trim()), t;
};

export const reviewList: ReviewType[] = [
  {
    id: 1,
    name: 'Lori Stevens',
    image: avatar09,
    course: 'Building Scalable APIs with GraphQL',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carolyn Ortiz',
    image: avatar01,
    course: 'Graphic Design Masterclass',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dennis Barrett',
    image: avatar03,
    course: 'JavaScript: Full Understanding',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Billy Vasquez',
    image: avatar04,
    course: 'Time Management Mastery: Do More, Stress Less',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Jacqueline Miller',
    image: avatar05,
    course: 'The complete Digital Marketing Course - 8 Course in 1',
    rating: 4.0,
  },
  {
    id: 6,
    name: 'Amanda Reed',
    image: avatar06,
    course: 'Microsoft Excel - Excel from Beginner to Advanced',
    rating: 4.0,
  },
  {
    id: 7,
    name: 'Samuel Bishop',
    image: avatar07,
    course: 'Behavior, Psychology and Care Training',
    rating: 4.0,
  },
  {
    id: 8,
    name: 'Louis Ferguson',
    image: avatar10,
    course: 'Create a Design System in Figma',
    rating: 3.5,
  },
];

export const topRatedList: TopRatedRType[] = [
  {
    image: courses08,
    title: 'Building Scalable APIs with GraphQL',
    views: 2568,
    rating: 5,
  },
  {
    image: courses02,
    title: 'Graphic Design Masterclass',
    views: 1858,
    rating: 5,
  },
  {
    image: courses04,
    title: 'Learn Invision',
    views: 6845,
    rating: 5,
  },
  {
    image: courses07,
    title: 'Deep Learning with React-Native',
    views: 3845,
    rating: 4.5,
  },
  {
    image: courses10,
    title: 'Bootstrap 5 From Scratch',
    views: 1458,
    rating: 4.5,
  },
];

export const pageViewsChart: ApexChartType = {
  height: 300,
  type: "donut",
  series: [80, 30],
  options: {
    labels: ['Positive', 'Negative'],
    chart: {
      height: 300,
      width: 300,
      type: 'donut',
      sparkline: {
        enabled: !0
      }
    },
    stroke: {
      // colors: 'transparent',
    },
    colors: [
      ThemeColor('--bs-success'),
      ThemeColor('--bs-danger'),
    ],
    tooltip: {
      theme: "dark"
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 100,
          width: 100
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};
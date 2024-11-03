import type { ApexChartType, CourseType, ReviewType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';

const ThemeColor = (e: any) => {
  let t = getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.length > 0 && (t = t.trim()), t;
};

export const courseList: CourseType[] = [
  {
    title: 'Building Scalable APIs with GraphQL',
    image: courses08,
    student: 412,
    status: 'Live',
  },
  {
    title: 'Graphic Design Masterclass',
    image: courses02,
    student: 254,
    status: 'Live',
  },
  {
    title: 'Learn Invision',
    image: courses04,
    student: 0,
    status: 'Pending',
  },
  {
    title: 'Deep Learning with React-Native',
    image: courses07,
    student: 98,
    status: 'Live',
  },
  {
    title: 'Bootstrap 5 From Scratch',
    image: courses10,
    student: 58,
    status: 'Cancel',
  },
];

export const reviewList: ReviewType[] = [
  {
    name: 'Lori Stevens',
    image: avatar09,
    course: 'Building Scalable APIs with GraphQL',
    rating: 5.0,
  },
  {
    name: 'Carolyn Ortiz',
    image: avatar01,
    course: 'Graphic Design Masterclass',
    rating: 5.0,
  },
  {
    name: 'Dennis Barrett',
    image: avatar03,
    course: 'Deep Learning with React-Native',
    rating: 4.5,
  },
  {
    name: 'Billy Vasquez',
    image: avatar04,
    course: 'Bootstrap 5 From Scratch',
    rating: 4.5,
  },
  {
    name: 'Jacqueline Miller',
    image: avatar05,
    course: 'Learn Invision',
    rating: 4.0,
  },
];

export const activeStudentChart: ApexChartType = {
  height: 130,
  type: "area",
  series: [{
    name: 'Conversion',
    data: [200, 290, 500, 500, 430, 316, 478, 700]
  }],
  options: {
    chart: {
      height: 130,
      type: 'area',
      sparkline: {
        enabled: !0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: [ThemeColor('--bs-success')],
    xaxis: {
      type: 'category',
      categories: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11']
    },
    grid: {

    },
    tooltip: {
      y: {
        title: {
          formatter: function () {
            return "";
          }
        }
      },
      marker: {
        show: !1
      }
    }
  },
};

export const newEnrollmentChart: ApexChartType = {
  height: 130,
  type: "area",
  series: [{
    name: 'Conversion',
    data: [200, 290, 325, 500, 600, 316, 478, 700]
  }],
  options: {
    chart: {
      height: 130,
      type: 'area',
      sparkline: {
        enabled: !0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: [ThemeColor('--bs-purple')],
    xaxis: {
      type: 'category',
      categories: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11']
    },
    grid: {

    },
    tooltip: {
      y: {
        title: {
          formatter: function () {
            return "";
          }
        }
      },
      marker: {
        show: !1
      }
    }
  },
};

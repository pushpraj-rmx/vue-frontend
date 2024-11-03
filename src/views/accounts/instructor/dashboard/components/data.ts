import type { ApexChartType, CourseType } from '@/types';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';

const ThemeColor = (e: any) => {
  let t = getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.length > 0 && (t = t.trim()), t;
};

export const courseData: CourseType[] = [
  {
    title: 'Building Scalable APIs with GraphQL',
    image: courses08,
    selling: 34,
    price: 125478,
    duration: '9 months',
  },
  {
    title: 'Bootstrap 5 From Scratch',
    image: courses10,
    selling: 45,
    price: 285478,
    duration: '6 months',
  },
  {
    title: 'Graphic Design Masterclass',
    image: courses02,
    selling: 21,
    price: 85478,
    duration: '4 months',
  },
  {
    title: 'Learn Invision',
    image: courses04,
    selling: 28,
    price: 98478,
    duration: '8 months',
  },
  {
    title: 'Angular – The Complete Guider',
    image: courses06,
    selling: 38,
    price: 102478,
    duration: '1 year',
  },
];

export const payoutChart: ApexChartType = {
  height: 300,
  type: "area",
  series: [{
    name: 'Payout',
    data: [2909, 1259, 950, 1563, 1825, 2526, 2010, 3260, 3005, 3860, 4039]
  }],
  options: {
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false
      },
    },

    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    colors: [ThemeColor('--bs-primary')],
    xaxis: {
      // type: 'Payout',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct ', 'Nov', 'Dec'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    yaxis: [{
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
    }],
    tooltip: {
      y: {
        title: {
          formatter: function () {
            return "" + "$";
          }
        }
      },
      marker: {
        show: !1
      }
    }
  },
};

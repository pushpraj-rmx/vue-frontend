import type { ApexChartType, ReviewType } from '@/types';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';

const ThemeColor = (e: any) => {
  let t = getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.length > 0 && (t = t.trim()), t;
};

export const studentReviewList: ReviewType[] = [
  {
    image: avatar09,
    name: 'Lori Stevens',
    date: '29 Nov 2021',
    rating: 5,
  },
  {
    image: avatar01,
    name: 'Carolyn Ortiz',
    date: '15 Nov 2021',
    rating: 5,
  },
  {
    image: avatar03,
    name: 'Dennis Barrett',
    date: '28 Oct 2021',
    rating: 4.5,
  },
  {
    image: avatar04,
    name: 'Billy Vasquez',
    date: '12 Oct 2021',
    rating: 4.5,
  },
  {
    image: avatar05,
    name: 'Jacqueline Miller',
    date: '31 Sep 2021',
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
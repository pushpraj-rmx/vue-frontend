import type { ApexChartType, InstructorType } from '@/types';
import type { NoticeType } from '@/views/admin/dashboard/components/types';
import { faUserTie, faBookOpen, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';

const ThemeColor = (e: any) => {
  let t = getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.length > 0 && (t = t.trim()), t;
};

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

export const trafficViewsChart: ApexChartType = {
  height: 200,
  type: "donut",
  series: [70, 15, 10, 5],
  options: {
    labels: ['Course-1', 'Course-2', 'Course-3', 'Course-4'],
    chart: {
      height: 200,
      width: 200,
      offsetX: 0,
      type: 'donut',
      sparkline: {
        enabled: !0
      }
    },
    colors: [
      ThemeColor('--bs-primary'),
      ThemeColor('--bs-success'),
      ThemeColor('--bs-warning'),
      ThemeColor('--bs-danger')
    ],
    tooltip: {
      theme: "dark"
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
          height: 200,
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};

export const instructorsList: InstructorType[] = [
  {
    image: avatar09,
    name: 'Lori Stevens',
    verified: true,
    courses: 25,
    rating: 4.5,
  },
  {
    image: avatar03,
    name: 'Dennis Barrett',
    verified: false,
    courses: 18,
    rating: 4.5,
  },
  {
    image: avatar01,
    name: 'Jacqueline Miller',
    verified: true,
    courses: 21,
    rating: 4.8,
  },
  {
    image: avatar04,
    name: 'Billy Vasquez',
    verified: false,
    courses: 15,
    rating: 4.5,
  },
  {
    image: avatar05,
    name: 'Amanda Reed',
    verified: true,
    courses: 29,
    rating: 4.5,
  },
];

export const noticeBoardList: NoticeType[] = [
  {
    icon: faUserTie,
    iconColor: 'purple',
    title: 'Join New Instructor',
    description: 'Amongst moments do in arrived Fat weddings believed prospect',
    time: '5 min ago',
  },
  {
    icon: faBookOpen,
    iconColor: 'orange',
    title: 'Update New Course',
    description: 'Arrived Fat weddings believed prospect',
    time: '4 hour ago',
  },
  {
    icon: faBook,
    iconColor: 'info',
    title: 'Update Syllabus',
    description: 'Arrived Fat weddings believed prospect',
    time: '2 days ago',
  },
  {
    icon: faGlobe,
    iconColor: 'danger',
    title: 'Update New Feature',
    description: 'Arrived Fat weddings believed prospect',
    time: '3 days ago',
  },
]


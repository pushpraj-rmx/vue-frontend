import type { CourseType } from '@/types';
import { currency } from '@/helpers/constants';
import type { CounterType, TrendingType } from '@/views/demos/default/components/types';
import { faTv, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses14 from '@/assets/images/courses/4by3/14.jpg';
import courses15 from '@/assets/images/courses/4by3/15.jpg';
import courses17 from '@/assets/images/courses/4by3/17.jpg';
import courses16 from '@/assets/images/courses/4by3/16.jpg';

import avatar10 from '@/assets/images/avatar/10.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';

export const counterData: CounterType[] = [
  {
    title: "Online Courses",
    count: 10,
    suffix: "K",
    icon: faTv,
    variant: "warning"
  },
  {
    title: "Expert Tutors",
    count: 200,
    suffix: "+",
    icon: faUserTie,
    variant: "blue"
  },
  {
    title: "Online Students",
    count: 60,
    suffix: "K+",
    icon: faUserGraduate,
    variant: "purple"
  },
  {
    title: "Certified Courses",
    count: 6,
    suffix: "K+",
    icon: BIconPatchCheckFill,
    variant: "info"
  }
];

export const courseList: CourseType[] = [
  {
    image: courses08,
    badges: [
      {
        text: 'All level',
        class: 'purple',
      }
    ],
    title: 'Sketch from A to Z: for app designer',
    description: 'Proposal indulged no do sociable he throwing settling.',
    isLike: false,
    rating: 4.0,
    duration: '12h 56m',
    lectures: 15,
    type: 'development',
  },
  {
    image: courses02,
    badges: [
      {
        text: 'Beginner',
        class: 'success',
      }
    ],
    title: 'Graphic Design Masterclass',
    description:
      'Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms',
    isLike: true,
    rating: 4.5,
    duration: '9h 56m',
    lectures: 65,
    type: 'graphic',
  },
  {
    image: courses03,
    badges: [
      {
        text: 'Beginner',
        class: 'success',
      }
    ],
    title: 'Create a Design System in Figma',
    description:
      'Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.',
    isLike: false,
    rating: 4.5,
    duration: '5h 56m',
    lectures: 32,
    type: 'marketing',
  },
  {
    image: courses07,
    badges: [
      {
        text: 'Beginner',
        class: 'success',
      }
    ],
    title: 'Deep Learning with React-Native',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther',
    isLike: true,
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
    type: 'finance',
  },
  {
    image: courses11,
    badges: [
      {
        text: 'All level',
        class: 'purple',
      }
    ],
    title: 'Build Responsive Websites with HTML',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther',
    isLike: true,
    rating: 4.0,
    duration: '15h 30m',
    lectures: 68,
    type: 'development',
  },
  {
    image: courses12,
    badges: [
      {
        text: 'Beginner',
        class: 'success',
      }
    ],
    title: 'Build Websites with CSS',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther',
    isLike: false,
    rating: 4.5,
    duration: '36h 30m',
    lectures: 72,
    type: 'development',
  },
  {
    image: courses04,
    badges: [
      {
        text: 'All level',
        class: 'purple',
      }
    ],
    title: 'Learn Invision',
    description:
      'Arrived off she elderly beloved him Course regard to up he hardly.',
    isLike: true,
    rating: 3.5,
    duration: '6h 56m',
    lectures: 82,
    type: 'graphic',
  },
  {
    image: courses09,
    badges: [
      {
        text: 'All level',
        class: 'purple',
      }
    ],
    title: 'JavaScript: Full Understanding',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    isLike: false,
    rating: 5.0,
    duration: '35h 20m',
    lectures: 89,
    type: 'marketing',
  },
];

export const trendingCourse: TrendingType[] = [
  {
    image: courses14,
    ribbon: 'Free',
    badges: [
      {
        text: 'Design',
        class: 'primary',
      },
      {
        text: 'Beginner',
        class: 'dark',
      },
    ],
    title: 'The complete Digital Marketing Course - 8 Course in 1',
    rating: 4.5,
    reviews: 6500,
    students: 6500,
    time: '6h 56m',
    lectures: 82,
    instructor: {
      name: 'Larry Lawson',
      avatar: avatar10,
    },
    price: 'Free',
  },
  {
    image: courses15,
    badges: [
      {
        text: 'Development',
        class: 'primary',
      },
      {
        text: 'All level',
        class: 'dark',
      },
    ],
    title: 'Angular – The Complete Guide (2021 Edition)',
    rating: 4.0,
    reviews: 3500,
    students: 4500,
    time: '12h 45m',
    lectures: 65,
    instructor: {
      name: 'Billy Vasquez',
      avatar: avatar04,
    },
    price: currency + '255',
  },
  {
    image: courses17,
    badges: [
      {
        text: 'Design',
        class: 'primary',
      },
      {
        text: 'Beginner',
        class: 'dark',
      },
    ],
    title: 'Time Management Mastery: Do More, Stress Less',
    rating: 4.5,
    reviews: 2000,
    students: 8000,
    time: '24h 56m',
    lectures: 55,
    instructor: {
      name: 'Lori Stevens',
      avatar: avatar09,
    },
    price: currency + '500',
  },
  {
    image: courses16,
    badges: [
      {
        text: 'Design',
        class: 'primary',
      },
      {
        text: 'Beginner',
        class: 'dark',
      },
    ],
    title: 'Time Management Mastery: Do More, Stress Less',
    rating: 4.0,
    reviews: 2000,
    students: 1200,
    time: '9h 56m',
    lectures: 21,
    instructor: {
      name: 'Frances Guerrero',
      avatar: avatar01,
    },
    price: currency + '200',
  },
];
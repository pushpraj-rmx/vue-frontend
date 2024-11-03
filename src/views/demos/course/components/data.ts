import type { CategoryType, FeatureType } from '@/views/demos/course/components/types';
import { faTools, faHeartbeat, faPhotoVideo, faLaptopCode, faCropAlt, faBusinessTime, faMusic, faPalette } from '@fortawesome/free-solid-svg-icons';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses05 from '@/assets/images/courses/4by3/05.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';

import courses14 from '@/assets/images/courses/4by3/14.jpg';
import courses15 from '@/assets/images/courses/4by3/15.jpg';
import courses16 from '@/assets/images/courses/4by3/16.jpg';
import courses17 from '@/assets/images/courses/4by3/17.jpg';
import courses18 from '@/assets/images/courses/4by3/18.jpg';
import courses19 from '@/assets/images/courses/4by3/19.jpg';
import courses20 from '@/assets/images/courses/4by3/20.jpg';
import courses21 from '@/assets/images/courses/4by3/21.jpg';
import courses22 from '@/assets/images/courses/4by3/22.jpg';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar11 from '@/assets/images/avatar/11.jpg';
import avatar12 from '@/assets/images/avatar/12.jpg';
import type { CourseType } from '@/types';

export const categoryList: CategoryType[] = [
  {
    category: 'Math & Logic',
    icon: faTools,
    iconClass: 'bg-purple bg-opacity-10 text-purple',
    courses: 89,
  },
  {
    category: 'Health & Fitness',
    icon: faHeartbeat,
    iconClass: 'bg-danger bg-opacity-10 text-danger',
    courses: 95,
  },
  {
    category: 'Photography',
    icon: faPhotoVideo,
    iconClass: 'bg-blue bg-opacity-10 text-blue',
    courses: 38,
  },
  {
    category: 'Development',
    icon: faLaptopCode,
    iconClass: 'bg-success bg-opacity-10 text-success',
    courses: 105,
  },
  {
    category: 'Design',
    icon: faCropAlt,
    iconClass: 'bg-orange bg-opacity-10 text-orange',
    courses: 72,
  },
  {
    category: 'Business',
    icon: faBusinessTime,
    iconClass: 'bg-primary bg-opacity-10 text-primary',
    courses: 68,
  },
  {
    category: 'Music',
    icon: faMusic,
    iconClass: 'bg-info bg-opacity-10 text-info',
    courses: 51,
  },
  {
    category: 'Painting',
    icon: faPalette,
    iconClass: 'bg-warning bg-opacity-15 text-warning',
    courses: 69,
  },
];

export const featureList: FeatureType[] = [
  {
    image: courses17,
    students: '9.1k',
    rating: 4.5,
    avatar: avatar09,
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    category: 'Personal Development',
    price: 140,
  },
  {
    image: courses18,
    students: '2.5k',
    rating: 3.6,
    avatar: avatar07,
    title: 'Fundamentals of Business Analysis',
    category: 'Business Development',
    price: 160,
  },
  {
    image: courses21,
    students: '6k',
    rating: 3.8,
    avatar: avatar05,
    title: 'Google Ads Training: Become a PPC Expert',
    category: 'SEO',
    price: 226,
  },
  {
    image: courses20,
    students: '15k',
    rating: 4.8,
    avatar: avatar02,
    title: 'Behavior, Psychology and Care Training',
    category: 'Lifestyle',
    price: 342,
  },
  {
    image: courses15,
    students: '8k',
    rating: 3.6,
    avatar: avatar11,
    title: 'Microsoft Excel - Excel from Beginner to Advanced',
    category: 'Technology',
    price: 245,
  },
  {
    image: courses14,
    students: '4k',
    rating: 4.0,
    avatar: avatar12,
    title: 'Twitter Marketing & Twitter Ads For Beginners',
    category: 'Technology',
    price: 199,
  },
  {
    image: courses19,
    students: '6k',
    rating: 4.0,
    avatar: avatar08,
    title: 'Consulting Approach to Problem Solving',
    category: 'Psychology',
    price: 215,
  },
  {
    image: courses16,
    students: '2k',
    rating: 3.5,
    avatar: avatar06,
    title: 'Ultimate business intelligence analyst a to Z Course(Pro)',
    category: 'Business',
    price: 112,
  },
];

export const itCourseList: CourseType[] = [
  {
    title: 'Digital Marketing',
    courses: 23,
    image: courses01,
  },
  {
    title: 'Figma',
    courses: 16,
    image: courses03,
  },
  {
    title: 'Python',
    courses: 32,
    image: courses05,
  },
  {
    title: 'Angular',
    courses: 48,
    image: courses06,
  },
  {
    title: 'React-Native',
    courses: 31,
    image: courses07,
  },
  {
    title: 'Sketch',
    courses: 38,
    image: courses08,
  },
  {
    title: 'Javascript',
    courses: 33,
    image: courses09,
  },
  {
    title: 'Bootstrap',
    courses: 62,
    image: courses10,
  },
];

export const liveCourseList: CourseType[] = [
  {
    title: 'Learn the French Language: Complete Course',
    image: courses18,
    video_link: 'https://www.youtube.com/embed/tXHviS-4ygo',
    students: [avatar01, avatar02, avatar03, avatar06],
  },
  {
    title: 'Time Management Mastery: Do More, Stress Less',
    image: courses22,
    video_link: 'https://www.youtube.com/embed/tXHviS-4ygo',
    students: [avatar01, avatar02, avatar03, avatar06],
  },
  {
    title: 'English for Beginners: Intensive Spoken English Course',
    image: courses21,
    video_link: 'https://www.youtube.com/embed/tXHviS-4ygo',
    students: [avatar01, avatar02, avatar03, avatar06],
  },
];

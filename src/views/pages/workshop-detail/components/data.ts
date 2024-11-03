import { BIconPcDisplayHorizontal, BIconCalendar } from 'bootstrap-icons-vue';
import { faGlobeEurope, faVideo, faPlay, faFileSignature, faFileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import type { CurriculumType, TestimonialType } from '@/views/pages/workshop-detail/components/types';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import about27 from '@/assets/images/about/27.jpg';

import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';

export const curriculamList: CurriculumType[] = [
  {
    icon: BIconPcDisplayHorizontal,
    title: '2 Video Session',
    video: true,
    links: [
      {
        title: 'Watch demo video',
        details: [
          {
            icon: BIconCalendar,
            text: '30 min video',
          },
          {
            icon: faGlobeEurope,
            text: 'USA timezone',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/tXHviS-4ygo',
        image: courses01,
      },
      {
        title: 'Meet me in a live session',
        details: [
          {
            icon: BIconCalendar,
            text: 'Jun 28, 6:30PM - 8:00PM',
          },
          {
            icon: faGlobeEurope,
            text: 'USA timezone',
          },
          {
            icon: faVideo,
            text: 'Meet on a zoom call',
          },
        ],
        image: about27,
      },
    ],
  },
  {
    title: 'Introduction of Digital Marketing',
    text: "If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced digital marketing course syllabus, let's look at the scope of digital marketing and what the future holds.",
    links: [
      {
        icon: faPlay,
        text: 'What is Digital Marketing',
      },
      {
        icon: faFileSignature,
        text: 'Assignments 1 - Research about marketing',
      },
      {
        icon: faFileAlt,
        text: 'Slide - Digital Marketing',
      },
      {
        icon: faQuestionCircle,
        text: 'Quiz - Digital Marketing',
      },
    ],
  },
  {
    title: 'What is Search Engine Optimization(SEO)',
    links: [
      {
        icon: faPlay,
        text: 'What is Digital Marketing What is Digital Marketing',
      },
      {
        icon: faFileSignature,
        text: 'Assignments 1 - Research about marketing',
      },
      {
        icon: faFileAlt,
        text: 'Slide - Digital Marketing',
      },
      {
        icon: faQuestionCircle,
        text: 'Quiz - Digital Marketing',
      },
    ],
  },
  {
    title: 'Google tag manager',
    text: "If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced digital marketing course syllabus, let's look at the scope of digital marketing and what the future holds.",
    links: [
      {
        icon: faPlay,
        text: 'What is Digital Marketing What is Digital Marketing',
      },
      {
        icon: faFileSignature,
        text: 'Assignments 1 - Research about marketing',
      },
      {
        icon: faFileAlt,
        text: 'Slide - Digital Marketing',
      },
    ],
  },
];

export const testimonialsList: TestimonialType[] = [
  {
    avatar: avatar03,
    name: 'Dennis Barrett',
    quote:
      '"Make my life easier and organized conviction For every delay in they Extremity now strangers contained breakfast"',
  },
  {
    avatar: avatar02,
    name: 'Billy Vasquez',
    quote:
      '"Life easier and organized conviction For every delay in they Extremity now strangers contained breakfast"',
  },
  {
    avatar: avatar05,
    name: 'Lori Stevens',
    quote:
      '"Easier and organized conviction For every delay in they Extremity now strangers contained breakfast makes my life."',
  },
  {
    avatar: avatar06,
    name: 'Carolyn Ortiz',
    quote:
      '"Conviction For every delay in they Extremity now strangers contained breakfast"',
  },
];

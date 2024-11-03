import type { CourseDetailType } from '@/views/accounts/student/course-resume/components/types';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses08 from '@/assets/images/courses/4by3/08.jpg';

export const courseDetail: CourseDetailType[] = [
  {
    courseTitle: 'The Complete Digital Marketing Course - 12 Courses in 1',
    image: courses01,
    duration: '6h 56m',
    lectures: 82,
    level: 'Beginner',
    curriculum: [
      {
        sectionTitle: 'Introduction of Digital Marketing',
        lecturesCount: 3,
        completed: 1,
        progress: 80,
        lectures: [
          {
            lectureTitle: 'Introduction',
            duration: '2m 10s',
            isCollapsed: true,
            notes: [
              {
                timestamp: '5:20',
                noteContent: 'Describe SEO Engine',
              },
              {
                timestamp: '10:20',
                noteContent: 'Know about all marketing',
              },
            ],
          },
          {
            lectureTitle: 'What is Digital Marketing What is Digital Marketing',
            duration: '15m 10s',
            isCollapsed: true,
            notes: [
              {
                timestamp: '5:20',
                noteContent: 'Describe SEO Engine',
              },
              {
                timestamp: '10:20',
                noteContent: 'Know about all marketing',
              },
            ],
          },
          {
            lectureTitle: 'Type of Digital Marketing',
            duration: '18m 10s',
          },
        ],
      },
      {
        sectionTitle: 'Customer Life cycle',
        lecturesCount: 3,
        completed: 0,
        progress: 0,
        lectures: [
          {
            lectureTitle: 'Introduction',
            duration: '2m 10s',
          },
          {
            lectureTitle: 'What is Digital Marketing',
            duration: '15m 10s',
          },
          {
            lectureTitle: 'Type of Digital Marketing',
            duration: '18m 10s',
            locked: true,
          },
        ],
      },
    ],
  },
  {
    courseTitle: 'Sketch from A to Z: for app designer',
    image: courses08,
    duration: '8h 56m',
    lectures: 65,
    level: 'All level',
    curriculum: [
      {
        sectionTitle: 'Introduction of Sketch',
        lecturesCount: 3,
        completed: 1,
        progress: 35,
        lectures: [
          {
            lectureTitle: 'Introduction',
            duration: '2m 10s',
            isCollapsed: true,
            notes: [
              {
                timestamp: '5:20',
                noteContent: 'Describe SEO Engine',
              },
              {
                timestamp: '10:20',
                noteContent: 'Know about all marketing',
              },
            ],
          },
          {
            lectureTitle: 'What is Digital Marketing',
            duration: '15m 10s',
          },
          {
            lectureTitle: 'Type of Digital Marketing',
            duration: '18m 10s',
          },
        ],
      },
      {
        sectionTitle: 'YouTube Marketing',
        lecturesCount: 5,
        completed: 0,
        progress: 0,
        lectures: [
          {
            lectureTitle: 'Video Flow',
            duration: '25m 5s',
          },
          {
            lectureTitle: 'Webmaster Tool',
            duration: '15m 20s',
          },
          {
            lectureTitle: 'Featured Contents on Channel',
            duration: '32m 20s',
          },
          {
            lectureTitle: 'Managing Comments',
            duration: '20m 20s',
            locked: true,
          },
          {
            lectureTitle: 'Channel Analytics',
            duration: '18m 20s',
            locked: true,
          },
        ],
      },
    ],
  },
];

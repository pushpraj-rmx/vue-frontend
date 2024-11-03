import type { BookmarkType } from '@/views/accounts/student/bookmark/components/types';

import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses01 from '@/assets/images/courses/4by3/01.jpg';

export const bookmarkList: BookmarkType[] = [
  {
    image: courses02,
    variant: 'success',
    badge: 'Beginner',
    favorite: true,
    title: 'Graphic Design Masterclass',
    description:
      'Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms',
    rating: 4.5,
    duration: '9h 56m',
    lectures: 65,
  },
  {
    image: courses07,
    variant: 'success',
    badge: 'Beginner',
    favorite: true,
    title: 'Deep Learning with React-Native',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
  },
  {
    image: courses11,
    variant: 'purple',
    badge: 'All level',
    favorite: true,
    title: 'Build Responsive Websites with HTML',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.0,
    duration: '15h 30m',
    lectures: 68,
  },
  {
    image: courses10,
    variant: 'info',
    badge: 'Intermediate',
    favorite: true,
    title: 'Bootstrap 5 From Scratch',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.5,
    duration: '25h 56m',
    lectures: 38,
  },
  {
    image: courses04,
    variant: 'purple',
    badge: 'All level',
    favorite: true,
    title: 'Learn Invision',
    description:
      'Arrived off she elderly beloved him Course regard to up he hardly.',
    rating: 3.5,
    duration: '6h 56m',
    lectures: 82,
  },
  {
    image: courses01,
    variant: 'success',
    badge: 'Beginner',
    favorite: true,
    title: 'Digital Marketing Masterclass',
    description: 'Delivered dejection necessary objection do Mr prevailed.',
    rating: 4.5,
    duration: '6h 56m',
    lectures: 82,
  },
];

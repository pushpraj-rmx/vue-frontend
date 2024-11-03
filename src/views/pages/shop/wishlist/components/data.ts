import type { WishlistType } from '@/views/pages/shop/wishlist/components/types';

import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';

export const wishList: WishlistType[] = [
  {
    image: courses02,
    badge: 'Beginner',
    badgeColor: 'success',
    isFavourite: true,
    title: 'Graphic Design Masterclass',
    description:
      'Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms',
    rating: 4.5,
    duration: '9h 56m',
    lectures: 65,
  },
  {
    image: courses07,
    badge: 'Beginner',
    badgeColor: 'success',
    isFavourite: true,
    title: 'Deep Learning with React-Native',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
  },
  {
    image: courses04,
    badge: 'All level',
    badgeColor: 'purple',
    isFavourite: true,
    title: 'Learn Invision',
    description:
      'Arrived off she elderly beloved him Course regard to up he hardly.',
    rating: 3.5,
    duration: '6h 56m',
    lectures: 82,
  },
  {
    image: courses11,
    badge: 'All level',
    badgeColor: 'purple',
    isFavourite: true,
    title: 'Build Responsive Websites with HTML',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther.',
    rating: 4.0,
    duration: '15h 30m',
    lectures: 68,
  },
];

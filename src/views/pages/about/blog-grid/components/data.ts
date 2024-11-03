import { currency } from '@/helpers/constants';
import type { GridListType } from '@/views/pages/about/blog-grid/components/types';

import event02 from '@/assets/images/event/02.jpg';
import event08 from '@/assets/images/event/08.jpg';
import event09 from '@/assets/images/event/09.jpg';
import event03 from '@/assets/images/event/03.jpg';
import event07 from '@/assets/images/event/07.jpg';
import event04 from '@/assets/images/event/04.jpg';
import event05 from '@/assets/images/event/05.jpg';
import event06 from '@/assets/images/event/06.jpg';

export const gridList: GridListType[] = [
  {
    image: event02,
    badge: 'Student life',
    badgeColor: 'danger',
    title: 'Student Loan Survey: Many Owe ' + currency + '50K-plus',
    description: 'Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.',
    author: 'Frances Guerrero',
    time: '30M Ago',
  },
  {
    image: event08,
    badge: 'Student life',
    badgeColor: 'success',
    title: 'How to make a college list',
    description: 'Prospective students should start broadly and then narrow their list down to colleges that best fit their needs, experts say. Yet remarkably appearance get him his projection.',
    author: 'Louis Crawford',
    time: '12H Ago',
  },
  {
    image: event09,
    badge: 'Travel',
    badgeColor: 'purple',
    title: 'Never underestimate the influence of Eduport',
    description: 'Prospective students should start broadly and then narrow their list.',
    author: 'Joan Wallace',
    time: '5D Ago',
  },
  {
    image: event03,
    badge: 'Research',
    badgeColor: 'danger',
    title: 'Covid-19 and the college experienced',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.',
    author: 'Amanda Reed',
    time: 'July 21, 2021',
  },
  {
    image: event07,
    badge: 'Research',
    badgeColor: 'success',
    title: 'Best Pinterest Boards for learning about business',
    description: 'Fully taken by worse do. Points afraid but may end law. Points afraid but may end law.',
    author: 'Samuel Bishop',
    time: '40D ago',
  },
  {
    image: event04,
    badge: 'Sports',
    badgeColor: 'primary',
    title: 'The Olympics are over, now what?',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.',
    author: 'Carolyn Ortiz',
    time: 'Aug 31, 2021',
  },
  {
    image: event05,
    badge: 'Student story',
    badgeColor: 'info',
    title: 'Campus Support for First-Year Students',
    description: 'Prospective students should start broadly and then narrow their list.',
    author: 'Lori Stevens',
    time: '3M Ago',
  },
  {
    image: event06,
    badge: 'Marketing',
    badgeColor: 'orange',
    title: 'Bad habits that people in the industry need to quit',
    description: 'Prospective students should start broadly and then narrow their list.',
    author: 'Louis Crawford',
    time: '10D Ago',
  },
];

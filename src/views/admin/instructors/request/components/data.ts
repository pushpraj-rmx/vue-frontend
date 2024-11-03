import type { RequestType } from '@/views/admin/instructors/request/components/types';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';

export const instructorRequests: RequestType[] = [
  {
    name: 'Lori Stevens',
    image: avatar09,
    skills: 'HTML, CSS, Bootstrap',
    date: '22 Oct 2021',
    status: 'pending',
  },
  {
    name: 'Carolyn Ortiz',
    image: avatar01,
    skills: 'Photoshop, Figma, Adobe XD',
    date: '06 Sep 2021',
    status: 'pending',
  },
  {
    name: 'Dennis Barrett',
    image: avatar03,
    skills: 'JavaScript, Java',
    date: '21 Jan 2021',
    status: 'accepted',
  },
  {
    name: 'Billy Vasquez',
    image: avatar04,
    skills: 'Maths, Chemistry',
    date: '25 Dec 2020',
    status: 'rejected',
  },
  {
    name: 'Jacqueline Miller',
    image: avatar05,
    skills: 'Python, Angular, React Native',
    date: '05 June 2020',
    status: 'accepted',
  },
  {
    name: 'Amanda Reed',
    image: avatar06,
    skills: 'After Effects, Premiere Pro',
    date: '14 Feb 2020',
    status: 'accepted',
  },
  {
    name: 'Samuel Bishop',
    image: avatar07,
    skills: 'PHP, WordPress, Shopify',
    date: '06 Jan 2020',
    status: 'rejected',
  },
];

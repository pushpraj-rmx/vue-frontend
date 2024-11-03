import type { EarningType } from '@/views/admin/earning/components/types';

import mastercard from '@/assets/images/client/mastercard.svg';
import paypal from '@/assets/images/client/paypal.svg';

export const earningList: EarningType[] = [
  {
    id: '#254684',
    title: 'Create a Design System in Figma',
    date: '29 Aug 2021',
    client_logo: mastercard,
    amount: 3999,
    status: 'Paid',
    type: 'mastercard',
  },
  {
    id: '#125464',
    title: 'Sketch from A to Z: for app designer',
    date: '26 Aug 2021',
    client_logo: paypal,
    amount: 4201,
    status: 'Paid',
    type: 'paypal',
  },
  {
    id: '#123546',
    title: 'The Complete Web Development in python',
    date: '18 July 2021',
    client_logo: paypal,
    amount: 1032,
    status: 'Pending',
    type: 'paypal',
  },
  {
    id: '#1235698',
    title: 'Deep Learning with React-Native',
    date: '09 July 2021',
    client_logo: mastercard,
    amount: 6548,
    status: 'Paid',
    type: 'mastercard',
  },
  {
    id: '#132456',
    title: 'Microsoft Excel - Excel from Beginner to Advanced',
    date: '21 June 2021',
    client_logo: paypal,
    amount: 2546,
    status: 'Pending',
    type: 'paypal',
  },
  {
    id: '#145623',
    title: 'Twitter Marketing & Twitter Ads For Beginners',
    date: '05 June 2021',
    client_logo: mastercard,
    amount: 4258,
    status: 'Cancel',
    type: 'mastercard',
  },
  {
    id: '#154632',
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    date: '15 April 2021',
    client_logo: paypal,
    amount: 854,
    status: 'Pending',
    type: 'paypal',
  },
  {
    id: '#165423',
    title: 'Create a Design System in Figma',
    date: '02 Jan 2021',
    client_logo: mastercard,
    amount: 965,
    status: 'Paid',
    type: 'mastercard',
  },
];

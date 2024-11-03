import type { OrderType } from './types';
import { currentYear } from '@/helpers/constants';

export const orderList: OrderType[] = [
  {
    title: 'The complete Digital Marketing Course - 8 Course in 1',
    order_id: '125489',
    date: '18/1/' + currentYear,
    amount: 356,
    payment_method: 'Credit Card',
  },
  {
    title: 'Time Management Mastery: Do More, Stress Less',
    order_id: '235486',
    date: '25/1/' + currentYear,
    amount: 186,
    payment_method: 'Debit Card',
  },
  {
    title: 'Building Scalable APIs with GraphQL',
    order_id: '0215789',
    date: '4/9/2020',
    amount: 450,
    payment_method: 'Paypal',
  },
  {
    title: 'Sketch from A to Z: for app designer',
    order_id: '0135689',
    date: '5/1/' + currentYear,
    amount: 0,
    payment_method: 'Free',
  },
  {
    title: 'Build Responsive Websites with HTML',
    order_id: '0587623',
    date: '2/1/' + currentYear,
    amount: 250,
    payment_method: 'Credit Card',
  },
  {
    title: 'JavaScript: Full Understanding',
    order_id: '0215789',
    date: '14/1/' + currentYear,
    amount: 325,
    payment_method: 'Debit Card',
  },
];

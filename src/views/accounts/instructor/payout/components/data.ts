import type { PayoutType } from '@/views/accounts/instructor/payout/components/types';
import { currentYear } from '@/helpers/constants';

export const payoutList: PayoutType[] = [
  {
    title: 'Successful payout #102356',
    amount: 3999,
    status: 'paid',
    date: '18/1/' + currentYear,
  },
  {
    title: 'Successful payout #102589',
    amount: 4875,
    status: 'paid',
    date: '12/1/' + currentYear,
  },
  {
    title: 'Successful payout #108645',
    amount: 1800,
    status: 'cancelled',
    date: '22/1/' + currentYear,
  },
  {
    title: 'Successful payout #108645',
    amount: 6800,
    status: 'paid',
    date: '28/1/' + currentYear,
  },
  {
    title: 'Successful payout #108645',
    amount: 3576,
    status: 'pending',
    date: '12/1/' + currentYear,
  },
];

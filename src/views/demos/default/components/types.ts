import type { BadgeType, BSIconType, UserType } from '@/types';

export type CounterType = {
  title: string;
  count: number;
  prefix?: string;
  suffix?: string;
  icon: BSIconType;
  variant: string;
};

export type TrendingType = {
  image: string;
  ribbon?: string;
  badges: BadgeType[];
  title: string;
  rating: number;
  reviews: number;
  students: number;
  time: string;
  lectures: number;
  instructor: UserType;
  price: string;
};
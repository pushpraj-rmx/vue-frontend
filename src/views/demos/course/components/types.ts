import type { BSIconType } from '@/types';

export type CategoryType = {
  category: string;
  icon: BSIconType;
  iconClass: string;
  courses: number;
};

export type FeatureType = {
  image: string;
  students: string;
  rating: number;
  avatar: string;
  title: string;
  category: string;
  price: number;
};
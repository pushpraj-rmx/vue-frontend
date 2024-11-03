import type { BSIconType } from '@/types'

export type OfferType = {
  image: string;
  title: string;
};

export type BannerType = {
  icon: BSIconType;
  count: number;
  label: string;
  variant: string;
};
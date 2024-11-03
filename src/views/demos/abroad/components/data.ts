import type { OfferType, BannerType } from '@/views/demos/abroad/components/types';
import { faUniversity, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

import courses23 from '@/assets/images/courses/4by3/23.jpg';
import courses24 from '@/assets/images/courses/4by3/24.jpg';
import courses25 from '@/assets/images/courses/4by3/25.jpg';
import courses26 from '@/assets/images/courses/4by3/26.jpg';

export const bannerData: BannerType[] = [
  {
    icon: faUniversity,
    count: 400,
    label: 'Universities',
    variant: 'info',
  },
  {
    icon: faGlobe,
    count: 25,
    label: 'Countries',
    variant: 'purple',
  },
  {
    icon: faHandshake,
    count: 12,
    label: 'Years of Experience',
    variant: 'warning ',
  },
];

export const offerList: OfferType[] = [
  {
    image: courses23,
    title: 'International English Language Testing System (IELTS)',
  },
  {
    image: courses24,
    title: 'Duolingo English Test (DUOLINGO)',
  },
  {
    image: courses25,
    title: 'Graduate Record Examination (GRE)',
  },
  {
    image: courses26,
    title: 'Test of English as a Foreign Language (TOEFL)',
  },
  {
    image: courses25,
    title: 'Graduate Record Examination (GRE)',
  },
];

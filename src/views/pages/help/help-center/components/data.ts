import { BIconEmojiSmile, BIconLayers, BIconInfoCircle, BIconHouse } from 'bootstrap-icons-vue';
import type { ArticleType, RecommendedType } from "@/views/pages/help/help-center/components/types";
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';

export const recommendedList: RecommendedType[] = [
  {
    icon: BIconEmojiSmile,
    variant: 'success',
    title: 'Get started',
    topics: [
      'Gulp and Customization',
      'Color Scheme and Logo Settings',
      'Dark mode, RTL Version and Lazy Load',
      'Sources, Credits and Changelog',
      'Updates and Support',
    ],
  },
  {
    icon: BIconLayers,
    variant: 'warning',
    title: 'Account Setup',
    topics: [
      'Connecting to your Account',
      'Edit your profile information',
      'Connecting to other Social Media Accounts',
      'Adding your profile picture',
      'Describing your store',
    ],
  },
  {
    icon: BIconInfoCircle,
    variant: 'orange',
    title: 'Other Topics',
    topics: [
      'Security & Privacy',
      'Author, Publisher & Admin Guides',
      'Pricing plans',
      'Sales Tax & Regulatory Fees',
      'Promotions & Deals',
    ],
  },
  {
    icon: BIconHouse,
    variant: 'purple',
    title: 'Advanced Usage',
    topics: [
      'Admin & Billing',
      'Become a Pro',
      'Mobile application',
      'Guide',
      'Promotions & Deals',
    ],
  },
];

export const articleList: ArticleType[] = [
  {
    title: 'The installation part',
    images: [avatar01, avatar02, avatar03],
    articles: 10,
    authors: ['Carolyn Ortiz', 'Billy Vasquez', 'Larry Lawson'],
  },
  {
    title: 'Supporting Customer With Inbox',
    images: [avatar08, avatar04],
    articles: 5,
    authors: ['Dennis Barrett', 'Louis Ferguson'],
  },
  {
    title: 'Sending Effective Emails',
    images: [avatar05],
    articles: 4,
    authors: ['Jacqueline Miller'],
  },
  {
    title: 'Connect With Customers',
    images: [avatar09, avatar10],
    articles: 11,
    authors: ['Lori Stevens', 'Samuel Bishop'],
  },
];

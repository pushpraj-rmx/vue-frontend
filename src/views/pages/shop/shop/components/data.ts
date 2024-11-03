import { BIconBook, BIconSoundwave, BIconFileEarmarkPdf } from 'bootstrap-icons-vue';
import type { ShopGridType } from "@/views/pages/shop/shop/components/types";

import book01 from '@/assets/images/book/01.jpg';
import book02 from '@/assets/images/book/02.jpg';
import book03 from '@/assets/images/book/03.jpg';
import book04 from '@/assets/images/book/04.jpg';
import book05 from '@/assets/images/book/05.jpg';
import book07 from '@/assets/images/book/07.jpg';
import book06 from '@/assets/images/book/06.jpg';

export const shopGrid: ShopGridType[] = [
  {
    id: 1001,
    title: 'HTML and CSS: Design and Build Websites (Paperback)',
    author: 'Dennis Barrett',
    price: 125,
    image: book01,
    icon: BIconBook,
  },
  {
    id: 1002,
    title: 'Angular 4 Tutorial in audio (Compact Disk)',
    author: 'Lori Stevens',
    price: 385,
    image: book02,
    icon: BIconSoundwave,
  },
  {
    id: 1003,
    title: 'Javascript: The Definitive Guide (PDF Book)',
    author: 'Dennis Barrett',
    price: 125,
    image: book03,
    icon: BIconFileEarmarkPdf,
  },
  {
    id: 1004,
    title: 'The Principles of Beautiful Graphics Design (Paperback)',
    author: 'Jacqueline Miller',
    price: 258,
    image: book04,
    icon: BIconBook,
  },
  {
    id: 1005,
    title: 'Responsive Web Design (Paperback)',
    author: 'Frances Guerrero',
    price: 356,
    image: book05,
    icon: BIconBook,
  },
  {
    id: 1006,
    title: 'Learning Python, Fourth Edition (PDF Book)',
    author: 'Samuel Bishop',
    price: 654,
    image: book07,
    icon: BIconFileEarmarkPdf,
  },
  {
    id: 1007,
    title: 'Perfect Genius Worksheets for Class 5 (Paperback)',
    author: 'Amanda Reed',
    price: 285,
    image: book06,
    icon: BIconBook,
  },
  {
    id: 1008,
    title: 'HTML and CSS: Design and Build Websites (Compact Disk)',
    author: 'Dennis Barrett',
    price: 125,
    image: book02,
    icon: BIconSoundwave,
  },
];

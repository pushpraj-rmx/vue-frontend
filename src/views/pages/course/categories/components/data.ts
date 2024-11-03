import type { LanguageType, CategoryType } from '@/views/pages/course/categories/components/types';

import dataScienceImg from '@/assets/images/element/data-science.svg';
import onlineImg from '@/assets/images/element/online.svg';
import engineeringImg from '@/assets/images/element/engineering.svg';
import codingImg from '@/assets/images/element/coding.svg';
import profitImg from '@/assets/images/element/profit.svg';
import medicalImg from '@/assets/images/element/medical.svg';
import homeImg from '@/assets/images/element/home.svg';
import artistImg from '@/assets/images/element/artist.svg';
import photographyImg from '@/assets/images/element/photography.svg';
import musicImg from '@/assets/images/element/music.svg';
import marketingImg from '@/assets/images/element/marketing.svg';
import accountImg from '@/assets/images/element/account.svg';

import arFlag from '@/assets/images/flags/ar.svg';
import frFlag from '@/assets/images/flags/fr.svg';
import grFlag from '@/assets/images/flags/gr.svg';
import inFlag from '@/assets/images/flags/in.svg';
import itFlag from '@/assets/images/flags/it.svg';
import spFlag from '@/assets/images/flags/sp.svg';
import ukFlag from '@/assets/images/flags/uk.svg';

export const courseCategories: CategoryType[] = [
  {
    title: "Data Science",
    image: dataScienceImg,
    courses: 15,
    variant: "bg-success"
  },
  {
    title: "IT & Software",
    image: onlineImg,
    courses: 22,
    variant: "bg-orange"
  },
  {
    title: "Engineering",
    image: engineeringImg,
    courses: 53,
    variant: "bg-danger"
  },
  {
    title: "Web Development",
    image: codingImg,
    courses: 25,
    variant: "bg-purple"
  },
  {
    title: "Finance",
    image: profitImg,
    courses: 20,
    variant: "bg-info"
  },
  {
    title: "Medical",
    image: medicalImg,
    courses: 10,
    variant: "bg-blue"
  },
  {
    title: "Architecture",
    image: homeImg,
    courses: 30,
    variant: "bg-warning"
  },
  {
    title: "Art & Design",
    image: artistImg,
    courses: 35,
    variant: "bg-dark"
  },
  {
    title: "Photography",
    image: photographyImg,
    courses: 20,
    variant: "bg-purple"
  },
  {
    title: "Musics",
    image: musicImg,
    courses: 10,
    variant: "bg-danger"
  },
  {
    title: "Marketing",
    image: marketingImg,
    courses: 30,
    variant: "bg-success"
  },
  {
    title: "Accounting",
    image: accountImg,
    courses: 35,
    variant: "bg-primary"
  },
];

export const languages: LanguageType[] = [
  {
    name: "French",
    flag: frFlag
  },
  {
    name: "German",
    flag: grFlag,
  },
  {
    name: "Español",
    flag: spFlag
  },
  {
    name: "English",
    flag: ukFlag
  },
  {
    name: "Hindi",
    flag: inFlag,
  },
  {
    name: "Italian",
    flag: itFlag,
  },
  {
    name: "Arabic",
    flag: arFlag,
  },
  {
    name: "English",
    flag: ukFlag
  }
];
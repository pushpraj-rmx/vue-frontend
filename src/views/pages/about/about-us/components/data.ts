import type { AboutType, AwardType, TeamMemberType } from '@/views/pages/about/about-us/components/types';

import microsoft from '@/assets/images/client/microsoft.svg';
import linkedin from '@/assets/images/client/linkedin.svg';
import netflix from '@/assets/images/client/netflix.svg';
import cocacola from '@/assets/images/client/coca-cola.svg';
import envato from '@/assets/images/client/envato.svg';
import android from '@/assets/images/client/android.svg';
import shippable from '@/assets/images/client/shippable.svg';
import algolia from '@/assets/images/client/algolia.svg';
import importio from '@/assets/images/client/importio.svg';
import yamaha from '@/assets/images/client/yamaha.svg';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';

export const clients: string[] = [microsoft, linkedin, netflix, cocacola, envato, android, cocacola, shippable, algolia, importio, yamaha];

export const aboutData: AboutType[] = [
  {
    title: "Enterprise customer",
    progress: 85,
  },
  {
    title: "Accurate Course",
    progress: 90,
  },
  {
    title: "Languages",
    progress: 75,
  },
  {
    title: "Instructors",
    progress: 95,
  },
];

export const awards: AwardType[] = [
  {
    name: "Heroes for Children award",
    year: 2015,
  },
  {
    name: "Education Agency of the Year",
    year: 2016,
  },
  {
    name: "National Teacher of the Year",
    year: 2017,
  },
  {
    name: "Best education agency 2018",
    year: 2018,
  },
  {
    name: "Teacher of the nation (2nd place)",
    year: 2019,
  },
  {
    name: "Best Independent Education Agency",
    year: 2020,
  }
];

export const teamData: TeamMemberType[] = [
  { img: avatar01, name: 'Carolyn Ortiz', designation: 'Designer' },
  { img: avatar02, name: 'Dennis Barrett', designation: 'IT professor' },
  { img: avatar09, name: 'Frances Guerrero', designation: 'Developer' },
  { img: avatar04, name: 'Larry Lawson', designation: 'Designer' },
  { img: avatar10, name: 'Louis Crawford', designation: 'Medical Professor' },
];
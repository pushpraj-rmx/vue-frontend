import type { ApexOptions } from 'apexcharts';
import type { ComponentOptionsBase, CreateComponentPublicInstance } from 'vue';
import type { RouteParamsRaw } from 'vue-router';

export type IconType = BSIconType | string;

export type BSIconType = ComponentOptionsBase<{}, any, any, any, any, any, any, any, string, any> &
  ThisType<CreateComponentPublicInstance<{}, any, any, any, any, any, any, any, Readonly<{}>>>;

export type RouteType = {
  name: string;
  params?: RouteParamsRaw;
};

export type IdType = string | number;

export type CompanyType = {
  icon?: string;
  image?: string;
  name?: string;
  externalLink?: string;
  route?: RouteType;
};

export type UserType = {
  id?: IdType;
  avatar?: string;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  role?: string;
  token?: string;
  company?: CompanyType;
};

export type FAQType = {
  question: string;
  answer: string;
  route?: RouteType;
};

export type ApexChartType = {
  height: number;
  type?: string;
  series: any[];
  options: ApexOptions;
};

export type BadgeType = {
  text: string;
  class: string;
};

export type CourseType = {
  image: string;
  title: string;
  status?: string;
  lectures?: number;
  completed?: number;
  selling?: number;
  price?: number;
  rating?: number;
  reviews?: number;
  date?: string;
  type?: string;
  instructor?: UserType;
  badges?: BadgeType[];
  description?: string;
  duration?: string;
  isLike?: boolean;
  name?: string;
  students?: string[];
  avatar?: string;
  category?: string;
  courses?: number;
  student?: number;
  progress?: number;
  video_link?: string;
};

export type StudentType = {
  image: string;
  name?: string;
  location?: string;
  date?: string;
  progress?: number;
  tasks?: number;
  payments?: number;
  courses?: number;
  students?: number;
  category?: string;
  features?: string[];
};

export type InstructorType = {
  image: string;
  name?: string;
  title?: string;
  description?: string;
  position?: string;
  courses?: number;
  rating?: number;
  projects?: number;
  score?: number;
  clipboard?: number;
  students?: number;
  lecture?: number;
  badge?: BadgeType;
  verified?: boolean;
  favorite?: boolean;
  duration?: string;
};

export type ReviewType = {
  id?: number;
  name: string;
  image: string;
  course?: string;
  date?: string;
  title?: string;
  content?: string;
  rating?: number;
  isCollapse?: boolean;
};

export type ProductType = {
  image: string;
  title: string;
  duration: string;
  rating: number;
  badge?: BadgeType;
  lectures?: number;
  description?: string;
  level?: string;
  ribbon?: string;
  isLike?: boolean;
  instructor?: UserType;
};
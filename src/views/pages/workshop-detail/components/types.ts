import type { BSIconType } from "@/types";

type LinkType = {
  icon: BSIconType;
  text: string;
};

type ContentType = {
  title?: string;
  details?: LinkType[];
  videoLink?: string;
  image?: string;
  icon?: BSIconType;
  text?: string;
};

export type CurriculumType = {
  icon?: BSIconType;
  title: string;
  video?: boolean;
  text?: string;
  links?: ContentType[];
};

export type TestimonialType = {
  avatar: string;
  name: string;
  quote: string;
};

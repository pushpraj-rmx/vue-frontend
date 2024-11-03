import type { BSIconType } from "@/types";

type LecturesType = {
  title: string;
  features: string[];
  icon?: BSIconType;
  isResume?: boolean;
  isSubmitted?: boolean;
};

export type CourseMaterialType = {
  date: string,
  lectures: LecturesType[];
};
export type NoteType = {
  title: string;
  description: string;
};
export type DiscussType = {
  title: string;
  name: string;
  comment: string;
  image: string;
  createdAt: Date;
};
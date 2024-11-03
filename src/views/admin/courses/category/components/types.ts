import type { UserType } from "@/types";

export type CategoryType = {
  image: string;
  title: string;
  instructor: UserType;
  rating: number;
  students: number;
};
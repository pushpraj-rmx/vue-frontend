import type { BSIconType } from "@/types";

export type RecommendedType = {
  icon: BSIconType;
  variant: string;
  title: string;
  topics: string[];
};

export type ArticleType = {
  title: string;
  images: string[];
  articles: number;
  authors: string[];
};
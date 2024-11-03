export type CurriculumType = {
  title: string;
  lectures: {
    title: string;
    time: string;
    isPremium?: boolean;
  }[],
};
type LectureType = {
  title: string;
  time: string;
  isPremium?: boolean;
};

export type CurriculumType = {
  title: string,
  lectures: LectureType[];
};
export type ProgramListType = {
  title: string;
  complete?: string;
  percentage: number;
  lectures: {
    title: string;
    duration?: string;
    status?: string;
    isPremium?: boolean;
  }[],
};
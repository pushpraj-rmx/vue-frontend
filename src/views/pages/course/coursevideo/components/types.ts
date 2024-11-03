type NoteType = {
  time: string;
  description: string;
};
type SectionType = {
  title: string;
  isPremium?: boolean;
  duration: string;
  notes?: NoteType[];
  isCollapsed?: boolean;
};

export type ContentType = {
  heading: string;
  sections: SectionType[];
};
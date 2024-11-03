type SpeakersType = {
  name: string;
  role: string;
};

type EventType = {
  time: string;
  title: string;
  avatar?: string;
  speakers?: SpeakersType[];
};

export type ScheduleType = {
  day: string;
  date: string;
  events: EventType[];
};

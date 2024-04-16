export type EventType = {
  id: number;
  title: string;
  description: string;
  city: string;
  format: string;
  location: string;
  creator: number;
  moderator: number;
  tags: TagType[];
  picture: string;
  stream_link: string;
  registration_open: string;
  registration_close: string;
  date_start: string;
  date_end: string;
};

export type TagType = {
  id: number;
  name: string;
};

export type ReportsType = {
  id: number;
  event: number;
  speaker_photo: string;
  topic: string;
  short_description: string;
  start_at: string;
  end_at: string;
  speaker: string;
  position: string;
};

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  pinned: boolean;
};

export const SORTING_FIELDS = {
  DATE: "date",
  TITLE: "title",
  PINNED: "pinned",
  DEFAULT: "default",
} as const;

export type SORTING_FIELD =
  (typeof SORTING_FIELDS)[keyof typeof SORTING_FIELDS];

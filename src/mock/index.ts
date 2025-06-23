import type { NewsItem } from "../types";

export const NEWS_MOCK_DATA: NewsItem[] = [
  ...Array.from({ length: 100 }, (_, i) => {
    const id = i;
    const randomOffset = Math.floor(Math.random() * 1000000000);
    const randomDate = new Date(Date.now() - randomOffset).toISOString();
    return {
      id,
      title: `Generated News Item #${id}`,
      date: randomDate,
      pinned: id % 3 === 0,
    };
  }),
];

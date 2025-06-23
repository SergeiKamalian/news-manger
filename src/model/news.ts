// model/news/filters.model.ts
import { createEvent, createStore, sample, combine } from "effector";
import { SORTING_FIELDS, type NewsItem, type SORTING_FIELD } from "../types";
import { NEWS_MOCK_DATA } from "../mock";

// --- Helpers ---
const LOCAL_STORAGE_KEY = "news-data";
const loadNewsFromStorage = (): NewsItem[] => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(NEWS_MOCK_DATA));
      return NEWS_MOCK_DATA;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return NEWS_MOCK_DATA;
    return parsed;
  } catch {
    return NEWS_MOCK_DATA;
  }
};

const saveNewsToStorage = (data: NewsItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

// --- Events ---
export const setSearchTerm = createEvent<string>();
export const setSortBy = createEvent<SORTING_FIELD>();
export const setPage = createEvent<number>();
export const setItemsPerPage = createEvent<number>();
export const togglePinned = createEvent<number>();
export const deleteNews = createEvent<number>();
export const updateNewsTitle = createEvent<{ id: number; newTitle: string }>();
export const addNews = createEvent<{ title: string }>();

// --- Filters ---
export const $searchTerm = createStore("").on(setSearchTerm, (_, term) => term);
export const $sortBy = createStore<SORTING_FIELD>("default")
  .on(setSortBy, (_, sort) => sort)
  .on(addNews, () => SORTING_FIELDS.DATE); // switch to "date" on add
export const $currentPage = createStore(1).on(setPage, (_, page) => page);
export const $itemsPerPage = createStore(10).on(
  setItemsPerPage,
  (_, val) => val
);

sample({
  clock: [setSearchTerm, setSortBy, setItemsPerPage],
  fn: () => 1,
  target: setPage,
});

// --- News ---
export const $news = createStore<NewsItem[]>(loadNewsFromStorage())
  .on(togglePinned, (state, id) => {
    const updated = state.map((item) =>
      item.id === id ? { ...item, pinned: !item.pinned } : item
    );
    saveNewsToStorage(updated);
    return updated;
  })
  .on(deleteNews, (state, id) => {
    const updated = state.filter((item) => item.id !== id);
    saveNewsToStorage(updated);
    return updated;
  })
  .on(updateNewsTitle, (state, { id, newTitle }) => {
    const updated = state.map((item) =>
      item.id === id
        ? { ...item, title: newTitle, date: new Date().toISOString() }
        : item
    );
    saveNewsToStorage(updated);
    return updated;
  })
  .on(addNews, (state, { title }) => {
    const newId = Math.max(...state.map((n) => n.id)) + 1;
    const newItem: NewsItem = {
      id: newId,
      title,
      pinned: false,
      date: new Date().toISOString(),
    };
    const updated = [newItem, ...state];
    saveNewsToStorage(updated);
    return updated;
  });

// --- Derived ---
export const $filteredNews = combine(
  {
    news: $news,
    search: $searchTerm,
    sortBy: $sortBy,
  },
  ({ news, search, sortBy }) => {
    let result = [...news];

    if (search.trim()) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case SORTING_FIELDS.DATE:
        result.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case SORTING_FIELDS.TITLE:
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SORTING_FIELDS.PINNED:
        result.sort((a, b) => Number(b.pinned) - Number(a.pinned));
        break;
      default:
        result.sort((a, b) => a.id - b.id);
    }

    return result;
  }
);

export const $paginatedNews = combine(
  $filteredNews,
  $currentPage,
  $itemsPerPage,
  (filtered, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return filtered.slice(start, end);
  }
);

export const $totalPages = combine(
  $filteredNews,
  $itemsPerPage,
  (items, perPage) => Math.ceil(items.length / perPage)
);

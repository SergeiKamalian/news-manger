import { useUnit } from "effector-react";
import { $paginatedNews } from "../../../model";
import { NewsListHeader } from "./NewsListHeader";
import { NewsListItem } from "./NewsListItem";

export const NewsList = () => {
  const [news] = useUnit([$paginatedNews]);

  if (!news.length) return <h2>Empty list...</h2>;

  return (
    <div style={{ borderColor: "#919191" }} className="border rounded-xl">
      <NewsListHeader />
      <ul className="flex flex-col w-full">
        {news.map((newsItem) => (
          <NewsListItem newsItem={newsItem} key={newsItem.id} />
        ))}
      </ul>
    </div>
  );
};

import { useCallback, useRef, useState } from "react";
import { LIST_ITEMS } from "../../../constants";
import { deleteNews, togglePinned, updateNewsTitle } from "../../../model";
import type { NewsItem } from "../../../types";
import { generateFormattedDateParts } from "../../../utils";
import { AppButton } from "../Button";
import { Input } from "../../ui/input";

interface NewsListItemProps {
  newsItem: NewsItem;
}
export const NewsListItem = (props: NewsListItemProps) => {
  const { newsItem } = props;
  const { datePart, timePart } = generateFormattedDateParts(newsItem.date);
  const [isEditView, setIsEditView] = useState(false);
  const [editValue, setEditValue] = useState(newsItem.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const saveHandler = useCallback(() => {
    updateNewsTitle({ id: newsItem.id, newTitle: editValue });
    setIsEditView(false);
  }, [editValue, newsItem.id]);

  const openEditView = useCallback(() => {
    setIsEditView(true);
    setEditValue(newsItem.title);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  }, [newsItem.title]);

  if (isEditView)
    return (
      <li
        key={newsItem.id}
        className={`w-full pl-[35px] pr-[35px] h-[80px] flex items-center border-t gap-5`}
        style={{ borderColor: "rgb(145, 145, 145)" }}
      >
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          ref={inputRef}
        />
        <div className="flex gap-2">
          <AppButton disabled={!editValue} onClick={saveHandler}>
            Save
          </AppButton>
          <AppButton onClick={() => setIsEditView(false)}>Cancel</AppButton>
        </div>
      </li>
    );
  return (
    <li
      key={newsItem.id}
      className={`w-full h-[80px] flex items-center border-t`}
      style={{ borderColor: "rgb(145, 145, 145)" }}
    >
      <div className={`pl-[35px] ${LIST_ITEMS.title.widthClass}`}>
        <span className="text-[#49454F] font-medium text-[16px] line-clamp-2">
          {newsItem.title}
        </span>
      </div>
      <div className={`pl-[35px] ${LIST_ITEMS.date.widthClass}`}>
        <span className="text-[#000000] font-medium text-[16px]">
          {datePart} <span className="text-[#8B8B8B]">{timePart}</span>
        </span>
      </div>
      <div
        className={`pl-[35px] pr-[35px] ${LIST_ITEMS.pin.widthClass} flex justify-between items-center`}
      >
        <button
          className="w-6 h-6 cursor-pointer"
          onClick={() => togglePinned(newsItem.id)}
        >
          <img
            src={`../../../../${newsItem.pinned ? "pinned" : "non_pinned"}.svg`}
            width={24}
            height={24}
            alt=""
          />
        </button>
        <div className="flex justify-between gap-[10px]">
          <AppButton icon="edit" onClick={openEditView}>
            Edit
          </AppButton>
          <AppButton icon="delete" onClick={() => deleteNews(newsItem.id)}>
            Delete
          </AppButton>
        </div>
      </div>
    </li>
  );
};

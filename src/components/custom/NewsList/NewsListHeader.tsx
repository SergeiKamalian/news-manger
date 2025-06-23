import { LIST_ITEMS } from "../../../constants";

export const NewsListHeader = () => {
  return (
    <div className="flex w-full">
      {Object.values(LIST_ITEMS).map((item) => (
        <div
          key={item.id}
          className={`pl-[35px] p-2 h-[48px] flex items-center text-[14px] font-normal text-[#636363] ${item.widthClass}`}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};

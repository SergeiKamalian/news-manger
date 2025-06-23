import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useUnit } from "effector-react";
import { $sortBy, setSortBy } from "../../model";
import { SORTING_FIELDS } from "../../types";

export function SortDropdown() {
  const [sortBy, onSortChange] = useUnit([$sortBy, setSortBy]);

  return (
    <Select value={sortBy} onValueChange={onSortChange}>
      <SelectTrigger className="w-full max-w-md h-12 bg-[#eee] rounded-xl text-gray-700">
        <SelectValue placeholder="Sort by: default" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(SORTING_FIELDS).map((field) => (
          <SelectItem value={field} key={field}>
            Sort by: {field}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

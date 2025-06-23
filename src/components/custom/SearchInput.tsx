import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { $searchTerm, setSearchTerm } from "../../model";
import { useUnit } from "effector-react";

export function SearchInput() {
  const [searchTerm, onSearchChange] = useUnit([$searchTerm, setSearchTerm]);

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        value={searchTerm}
        placeholder="Search news"
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-4 pr-10 h-12 bg-[#eee] rounded-xl text-gray-700 placeholder:text-gray-500"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
    </div>
  );
}

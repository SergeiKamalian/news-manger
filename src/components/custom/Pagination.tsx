import {
  $currentPage,
  $filteredNews,
  $itemsPerPage,
  $totalPages,
  setItemsPerPage,
  setPage,
} from "../../model";
import { generatePageNumbers } from "../../utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useUnit } from "effector-react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Pagination() {
  const [page, totalPages, setCurrentPage, itemsPerPage, setPerPage, filtered] =
    useUnit([
      $currentPage,
      $totalPages,
      setPage,
      $itemsPerPage,
      setItemsPerPage,
      $filteredNews,
    ]);

  const totalResults = filtered.length;
  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalResults);

  const pageNumbers = generatePageNumbers(page, totalPages);

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap mt-6">
      <div className="flex items-center gap-1">
        <button
          disabled={page === 1}
          onClick={() => setCurrentPage(page - 1)}
          className="px-3 py-1 text-sm text-gray-500 disabled:opacity-50 flex text-[#1E1E1E]"
        >
          <ArrowLeft className="mr-1 mt-0.5" size={16} /> Previous
        </button>

        {pageNumbers.map((p, i) =>
          typeof p === "number" ? (
            <button
              key={i}
              onClick={() => setCurrentPage(p)}
              className={`px-3 py-1 text-sm rounded-md border transition ${
                p === page
                  ? "bg-[#ECECEC] text-[#1E1E1E]"
                  : "text-black hover:bg-gray-100 border-transparent"
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={i} className="px-2 text-gray-400 text-sm">
              ...
            </span>
          )
        )}

        <button
          disabled={page === totalPages}
          onClick={() => setCurrentPage(page + 1)}
          className="px-3 py-1 text-sm text-gray-500 disabled:opacity-50 flex text-[#1E1E1E]"
        >
          Next <ArrowRight className="ml-1 mt-0.5" size={16} />
        </button>
      </div>

      <div className="flex items-center gap-4 text-md text-gray-500">
        <span>
          Results: {startIndex}-{endIndex} of {totalResults}
        </span>

        <Select
          value={itemsPerPage.toString()}
          onValueChange={(val) => setPerPage(+val)}
        >
          <SelectTrigger
            className="w-[60px] h-8 rounded-xl bg-white border"
            style={{ borderColor: "#919191" }}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[10, 25, 50, 100].map((count) => (
              <SelectItem key={count} value={count.toString()}>
                {count}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

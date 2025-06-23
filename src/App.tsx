import {
  AddNewPost,
  NewsList,
  SearchInput,
  SortDropdown,
  Pagination,
} from "./components";

function App() {
  return (
    <div className="w-full flex flex-col gap-[30px] max-w-4xl p-10 mx-auto">
      <AddNewPost />
      <div className="w-full flex gap-[20px]">
        <SearchInput />
        <SortDropdown />
      </div>
      <NewsList />
      <Pagination />
    </div>
  );
}

export default App;

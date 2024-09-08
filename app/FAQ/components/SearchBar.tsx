import { SearchIcon } from "@public/svg";
import React from "react";

function SearchBar() {
  return (
    <div className="relative items-center">
      <SearchIcon className="absolute left-5 top-1/2 z-0 -translate-y-1/2 transform" />
      <input
        type="text"
        placeholder="무엇이 궁금하신가요?"
        className="w-full rounded-[100px] border-1 border-grayscale-10 bg-grayscale-00 px-12 py-4 text-md font-medium placeholder:text-grayscale-40 focus:outline focus:outline-1 focus:outline-primary-50"
      />
    </div>
  );
}

export default SearchBar;

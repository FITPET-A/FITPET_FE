import React from "react";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="relative">
      <div className="items-center">
        <Image
          alt="faq_search"
          className="absolute left-5 top-[28px] z-0 -translate-y-1/2 transform"
          src="/assets/faq_search.webp"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="무엇이 궁금하신가요?"
          className="w-full rounded-[100px] bg-grayscale-00 px-12 py-4 text-grayscale-40"
        />
      </div>
    </div>
  );
}

export default SearchBar;

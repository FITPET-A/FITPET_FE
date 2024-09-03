import React, { useState } from "react";
import { RightArrowIcon, DownArrowIcon } from "@public/svg/";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`mb-4 w-full gap-4 rounded-md border bg-grayscale-00 p-8 text-left text-lg ${
        isOpen ? "border-primary-50" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-grayscale-70">{`Q. ${question}`}</p>
        {isOpen ? <DownArrowIcon /> : <RightArrowIcon />}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="my-5 h-[1px] bg-grayscale-10" />
        <p className="text-primary-50">{`A. ${answer}`}</p>
      </div>
    </button>
  );
}

export default FAQItem;

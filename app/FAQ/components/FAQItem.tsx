import React, { useState } from "react";
import { RightArrowIcon, DownArrowIcon } from "@public/svg/";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    setIsOpen(false);
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
      }, 280);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`mb-4 w-full gap-4 rounded-2xl border bg-grayscale-00 p-8 text-left text-lg ${
        isOpen ? "border-primary-50" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="flex-grow font-semibold text-grayscale-70">{`Q. ${question}`}</p>
        <div className="flex-shrink-0">
          {isOpen ? <DownArrowIcon /> : <RightArrowIcon />}
        </div>
      </div>
      <div
        className={`my-5 h-[1px] bg-grayscale-10 ${
          isOpen || isClosing ? "h-[1px]" : "hidden"
        }`}
      />
      <div
        className={`overflow-auto transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <p className="text-primary-50">{`A. ${answer}`}</p>
      </div>
    </button>
  );
}

export default FAQItem;

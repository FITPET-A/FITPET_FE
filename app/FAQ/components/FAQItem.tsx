import React, { useState, FC } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 gap-4 rounded-md bg-grayscale-00 px-8 text-lg">
      <div
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle();
          }
        }}
        className={`cursor-pointer gap-5 px-4 py-5 ${
          isOpen ? "border-b-1 border-grayscale-10" : ""
        }`}
      >
        <p className="font-semibold text-grayscale-70">{question}</p>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="border-t-1 border-grayscale-10 px-4 py-5">
          <p className="text-primary-50">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

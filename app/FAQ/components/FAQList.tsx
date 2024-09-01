import React from "react";
import FAQItem from "./FAQItem";

interface FAQListProps {
  faqs: { question: string; answer: string }[];
}

function FAQList({ faqs }: FAQListProps) {
  return (
    <div className="mt-6">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default FAQList;

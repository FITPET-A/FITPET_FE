import React from "react";
import { z } from "zod";
import FAQItem from "./FAQItem";

const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const FAQListSchema = z.object({
  faqs: z.array(FAQItemSchema),
});

interface FAQListProps {
  faqs: z.infer<typeof FAQItemSchema>[];
}

function FAQList({ faqs }: FAQListProps) {
  FAQListSchema.parse({ faqs });

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

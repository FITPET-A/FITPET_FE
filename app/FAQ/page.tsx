"use client";

import React, { useState } from "react";
import { faqsData, FAQData } from "@constants/faqsData";
import RoundButton from "@components/RoundButton";
import SearchBar from "./components/SearchBar";
import FAQList from "./components/FAQList";

const categories = [
  { label: "🐾 가입조건" },
  { label: "🛡️ 기타담보" },
  { label: "💰 보상" },
  { label: "⏳ 보장기간" },
  { label: "📏 보장범위" },
  { label: "💸 보험료" },
  { label: "📜 증권" },
  { label: "🚫 해지" },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof FAQData>("가입조건");

  return (
    <div className="mt-8 flex flex-col">
      <SearchBar />
      <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto">
        {categories.map((category) => (
          <RoundButton
            key={category.label}
            label={category.label}
            isSelected={selectedCategory === category.label.split(" ")[1]}
            hasMobileSize
            onClick={() =>
              setSelectedCategory(category.label.split(" ")[1] as keyof FAQData)
            }
          />
        ))}
      </div>

      <FAQList faqs={faqsData[selectedCategory] || []} />
    </div>
  );
}

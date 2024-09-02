"use client";

import React, { useState } from "react";
import RoundButton from "@components/RoundButton";
import SearchBar from "./components/SearchBar";
import FAQList from "./components/FAQList";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQData = {
  [category: string]: FAQItem[];
};

const categories = [
  { label: "🐾 가입조건" },
  { label: "🛡️ 기타담보" },
  { label: "💰 보상" },
  { label: "⏳ 보장기간" },
  { label: "📏 보장범위" },
  { label: "💸 보헙료" },
  { label: "📜 증권" },
  { label: "🚫 해지" },
];

// 예시로 더미 데이터 삽입 (앞에서 2개의 FAQ)
const faqsData: FAQData = {
  가입조건: [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      question: "How does the insurance compensation work?",
      answer: "The compensation works as follows.",
    },
  ],
  기타담보: [
    {
      question: "How does the insurance compensation work?",
      answer: "The compensation works as follows.",
    },
  ],
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof FAQData>("가입조건");

  return (
    <div className="mt-8 flex w-[1080px] flex-col px-6">
      <SearchBar />

      <div className="mt-6 flex space-x-2">
        {categories.map((category) => (
          <RoundButton
            key={category.label}
            label={category.label}
            isSelected={selectedCategory === category.label}
            onClick={() =>
              setSelectedCategory(category.label.split(" ")[1] as keyof FAQData)
            }
          />
        ))}
      </div>

      <FAQList faqs={faqsData[selectedCategory]} />
    </div>
  );
}

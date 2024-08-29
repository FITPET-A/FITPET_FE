"use client";

import { useState } from "react";
import AnimalButton from "./AnimalButton";

const animals = [
  { label: "강아지", icon: "🐶", value: "dog" },
  { label: "고양이", icon: "🐱", value: "cat" },
];

function AnimalInfoFormBox() {
  const [selectedAnimal, setSelectedAnimal] = useState("");

  return (
    <div className="mt-8 flex h-[462px] flex-col rounded-3xl bg-white shadow-main-form">
      <div className="mx-12 mt-8">
        <div className="flex space-x-4">
          {animals.map((animal) => (
            <AnimalButton
              key={animal.value}
              label={animal.label}
              icon={animal.icon}
              isSelected={selectedAnimal === animal.value}
              onClick={() => setSelectedAnimal(animal.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalInfoFormBox;

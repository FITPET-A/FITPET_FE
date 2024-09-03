"use client";

import Image from "next/image";
import { useState } from "react";
import { PetType } from "@ctypes/main";
import AnimalInfoFormBox from "./components/AnimalInfoFormBox";

export default function Home() {
  const [petType, setPetType] = useState<PetType>("DOG");

  const handleButtonClick = (pet: PetType) => {
    setPetType(pet);
  };
  return (
    <div className="relative mt-[170px] flex flex-col px-[40px]">
      <div className="font-paperlogy-heading text-[40px] text-white">
        3초만에 무료로 <br />펫 보험 견적서를 신청하세요!
      </div>
      <Image
        alt="marty"
        className="absolute -top-16 right-[76px] z-0"
        src={`/assets/${petType}_main.webp`}
        width={236}
        height={368}
      />
      <AnimalInfoFormBox petType={petType} onButtonClick={handleButtonClick} />
    </div>
  );
}

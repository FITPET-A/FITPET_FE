"use client";

import Image from "next/image";
import { useState } from "react";
import { PetType } from "@ctypes/main";
import AnimalInfoFormBox from "./components/AnimalInfoFormBox";

export default function MainPage() {
  const [petType, setPetType] = useState<PetType>("DOG");

  const handleButtonClick = (pet: PetType) => {
    setPetType(pet);
  };
  return (
    <div className="relative mt-[170px] flex flex-col px-6 desktop:px-[40px]">
      <div className="z-10 font-paperlogy-heading text-[40px] text-white">
        3초만에 무료로 <br />펫 보험 견적서를 신청하세요!
      </div>
      <Image
        alt="marty"
        className={`absolute z-0 ${petType === "DOG" ? "-top-[44px]" : "-top-[60px]"} right-[66px] z-0 desktop:right-[86px]`}
        src={`/assets/${petType}_main.webp`}
        width={435}
        height={`${petType === "DOG" ? 538 : 554}`}
      />
      <AnimalInfoFormBox petType={petType} onButtonClick={handleButtonClick} />
    </div>
  );
}

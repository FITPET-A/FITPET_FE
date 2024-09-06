"use client";

import Image from "next/image";
import { useState } from "react";
import { PetType } from "@ctypes/main";
import PetInfoFormBox from "./components/PetInfoFormBox";
import Landing from "./components/Landing";

export default function MainPage() {
  const [petType, setPetType] = useState<PetType>("DOG");

  const handleButtonClick = (pet: PetType) => {
    setPetType(pet);
  };
  return (
    <div className="relative mt-[88px] flex flex-col px-6 tablet:mt-[130px] desktop:mt-[170px] desktop:px-[40px]">
      <div className="hidden font-paperlogy-heading text-[40px] text-white tablet:block">
        펫보험 비교 견적서
        <br />
        1분만에 무료로 신청하세요!
      </div>
      <div className="z-10 font-paperlogy-title text-3xl text-white tablet:hidden">
        건강한 반려생활 <br /> 함께 만들어갈 <br />
        파트너를 찾고 있어요
      </div>
      <Image
        alt="marty"
        className="absolute -top-[60px] right-[66px] z-0 hidden desktop:right-[86px] desktop:block"
        src={`/assets/${petType}_main.webp`}
        width={435}
        height={554}
      />
      <Image
        alt="marty"
        className="absolute -top-[36px] right-[36px] z-0 hidden tablet:block desktop:hidden"
        src={`/assets/${petType}_main_normal.webp`}
        width={300}
        height={311}
      />
      <Image
        alt="marty"
        className="absolute -top-6 right-4 z-0 tablet:hidden"
        src={`/assets/${petType}_main_normal.webp`}
        width={220}
        height={311}
      />
      <PetInfoFormBox petType={petType} onButtonClick={handleButtonClick} />
      <Landing />
    </div>
  );
}

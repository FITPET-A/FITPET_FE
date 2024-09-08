"use client";

import Link from "next/link";
import LoudSpeakerIcon from "@public/svg/loudSpeaker.svg";
import LifestyleContent from "./components/LifestyleContent";
import { CONTENT_URLS, LIFESTYLE_CONTENTS } from "../../constants/lifestyle";

export default function LifestylePage() {
  const handleContentClick = (id: string) => {
    const url = CONTENT_URLS[id as keyof typeof CONTENT_URLS];
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-6 text-md font-medium text-grayscale-80 tablet:mt-8 tablet:gap-8">
      {/* 상단 바 */}
      <div className="flex h-14 w-full items-center justify-start rounded-2xl bg-grayscale-05 py-4 pl-5">
        <LoudSpeakerIcon className="mr-2" width={20} height={20} />
        <p className="mr-2 hidden text-grayscale-80 tablet:block tablet:text-md">
          우리 아이 건강 걱정 덜고 오래 행복하려면?
        </p>
        {/* 메인 페이지로 이동 */}
        <Link
          href="/"
          className="hidden cursor-pointer text-primary-50 tablet:block"
        >
          지금 바로 펫보험 견적 받기
        </Link>
        <p className="mr-2 text-sm text-grayscale-80 tablet:hidden">
          우리 아이와 오래 행복하려면?
        </p>
        {/* 메인 페이지로 이동 */}
        <Link
          href="/"
          className="cursor-pointer text-sm text-primary-50 tablet:hidden"
        >
          펫보험 견적 받아보기
        </Link>
      </div>

      {/* 반려생활 콘텐츠 */}
      <div className="mb-10 flex flex-col gap-6 tablet:gap-10">
        {LIFESTYLE_CONTENTS.map((content) => (
          <LifestyleContent
            key={content.key}
            title={content.title}
            content={content.content}
            hashtags={content.hashtags}
            imageSrc={content.imageSrc}
            onClick={() => handleContentClick(content.key)}
          />
        ))}
      </div>
    </div>
  );
}

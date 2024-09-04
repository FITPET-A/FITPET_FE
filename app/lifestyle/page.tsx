"use client";

import Link from "next/link";
import LoudSpeakerIcon from "@public/svg/loudSpeaker.svg";
import LifestyleContent from "./components/LifestyleContent";
import CONTENT_URLS from "../../constants/lifestyle";

export default function LifestylePage() {
  // SC 반려생활 내용
  const contents = [
    {
      key: "1",
      title: "강아지 심장, 신장 증후군 바로 알기",
      content:
        "아직까지 명확한 치료 가이드가 없는 심장, 신장 증후군.\n종류와 증상에 대해 구체적으로 알아봐요.",
      hashtags: ["#강아지", "#강아지 건강", "#수의사 칼럼"],
    },
    {
      key: "2",
      title: "강아지 백내장의 모든 것",
      content:
        "고백내장을 빨리 발견하기 위해선 보호자의 관심이 필요해요.\n강아지 백내장의 종류와 단계, 치료법과 주의점을 알아봐요.",
      hashtags: ["#강아지", "#강아지 건강", "#수의사 칼럼"],
    },
    {
      key: "3",
      title: "고양이 만성 신장 질환의 치료와 관리",
      content:
        "고양이는 특히 신장 질환에 취약한데요.\n치료 적기를 놓치기 쉬운 만성 신장 질환의 치료와 관리 방법 등을 알아봐요.",
      hashtags: ["#고양이", "#고양이 건강", "#수의사 칼럼"],
    },
  ];

  const handleContentClick = (id: string) => {
    const url = CONTENT_URLS[id as keyof typeof CONTENT_URLS];
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="mt-10 flex flex-col text-md font-medium text-grayscale-80">
      {/* 상단 바 */}
      <div className="flex h-14 w-full items-center justify-start rounded-2xl bg-grayscale-05 py-4 pl-5">
        <LoudSpeakerIcon className="mr-2" width={20} height={20} />
        <p className="mr-2 text-grayscale-80">
          우리 아이 건강 걱정 덜고 오래 행복하려면?
        </p>
        {/* 메인 페이지로 이동 */}
        <Link href="/" className="cursor-pointer text-primary-50">
          지금 바로 펫보험 견적 받기
        </Link>
      </div>

      {/* 반려생활 콘텐츠 */}
      {contents.map((content) => (
        <LifestyleContent
          key={content.key}
          title={content.title}
          content={content.content}
          hashtags={content.hashtags}
          onClick={() => handleContentClick(content.key)}
        />
      ))}
    </div>
  );
}

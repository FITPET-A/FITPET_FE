"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LifestylePage() {
  const router = useRouter();

  const handleTextClick = () => {
    router.push("/");
  };

  return (
    <div className="mt-8 flex flex-col text-md font-medium text-grayscale-80">
      {/* 상단 바 */}
      <div className="flex h-14 w-full items-center justify-start rounded-2xl bg-grayscale-05 py-4 pl-5">
        <Image
          src="/svg/loudSpeaker.svg"
          alt="loudSpeaker Icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <p className="mr-2 text-grayscale-80">
          우리 아이 건강 걱정 덜고 오래 행복하려면?
        </p>
        <button
          type="button"
          className="cursor-pointer text-primary-50"
          onClick={handleTextClick}
        >
          지금 바로 펫보험 견적 받기
        </button>
      </div>

      {/* 메인 콘텐츠 수정중 */}
      <p>반려생활 페이지 입니다.</p>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-[calc(100vh-440px)] flex-col items-center bg-grayscale-05 tablet:min-h-[calc(100vh-448px)]">
      <div className="flex h-[284px] w-full justify-center bg-primary-50">
        <div className="relative w-[1080px] px-6">
          {/* 텍스트 */}
          <h1 className="mt-[132px] font-paperlogy-heading text-[40px] font-bold text-grayscale-00">
            자주 묻는 질문
          </h1>
          <div className="mt-2 flex items-center gap-4 font-medium">
            <p className="text-3xl text-primary-00">찾는 질문이 없으신가요?</p>
            {/* 버튼 */}
            <button
              type="button"
              className="rounded-[80px] bg-primary-60 px-4 py-1 text-primary-00"
            >
              1:1 문의하기
            </button>
            <Image
              alt="faq_logo"
              className="absolute right-6 top-[184px] z-0 -translate-y-1/2 transform"
              src="/assets/faq_logo.webp"
              width={170.82}
              height={136}
            />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import InquiryButton from "./components/InquiryButton";

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-[calc(100vh-440px)] flex-col items-center bg-grayscale-05 tablet:min-h-[calc(100vh-448px)]">
      <div className="flex h-[186px] w-full justify-center bg-primary-50 tablet:h-[264px] desktop:h-[284px]">
        <div className="w-[1080px] px-4 tablet:px-6">
          <div className="mt-[72px] flex justify-between tablet:mt-[96px] desktop:mt-[116px]">
            <div className="mt-4 flex flex-col gap-2">
              <h1 className="font-paperlogy-title text-3xl font-bold text-grayscale-00 tablet:font-paperlogy-heading tablet:text-[40px]">
                자주 묻는 질문
              </h1>
              <InquiryButton />
            </div>
            <Image
              alt="faq_logo"
              src="/assets/faq_logo.webp"
              className="hidden tablet:block"
              width={170}
              height={136}
            />
            <Image
              alt="faq_logo"
              src="/assets/faq_logo.webp"
              className="tablet:hidden"
              width={123}
              height={98}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 tablet:px-6 desktop:w-[1080px]">
        {children}
      </div>
    </section>
  );
}

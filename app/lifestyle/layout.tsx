import React from "react";
import Image from "next/image";

export default function LifestyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[calc(100vh-440px)] flex-col items-center bg-grayscale-00 pb-[104px] tablet:min-h-[calc(100vh-448px)]">
      <div className="flex h-[186px] w-full justify-center bg-primary-50 tablet:h-[264px] desktop:h-[284px]">
        <div className="w-[1080px] px-4 tablet:px-6">
          <div className="mt-[72px] flex justify-between tablet:mt-[96px] desktop:mt-[116px]">
            <div className="mt-4 flex flex-col gap-2">
              <h1 className="font-paperlogy-title text-3xl font-bold text-grayscale-00 tablet:font-paperlogy-heading tablet:text-[40px]">
                반려 생활
              </h1>
              <span className="hidden font-paperlogy-title text-3xl text-primary-00 tablet:block">
                스마트커버 인슈어런스의 반려생활 콘텐츠는 핏펫과 함께합니다.
              </span>
              <span className="font-paperlogy-title text-sm font-regular text-primary-00 tablet:hidden">
                반려생활 콘텐츠는 핏펫과 함께합니다.
              </span>
            </div>
            <Image
              alt="lifestyle_logo"
              src="/assets/lifestyle_logo.webp"
              className="hidden tablet:block"
              width={238}
              height={136}
            />
            <Image
              alt="lifestyle_logo"
              src="/assets/lifestyle_logo.webp"
              className="tablet:hidden"
              width={172}
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

import React from "react";
import Image from "next/image";

export default function LifestyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex flex-col items-center"
      style={{
        minHeight: "calc(100vh - 448px)",
      }}
    >
      <div className="flex h-[284px] w-full justify-center bg-primary-50">
        <div className="relative w-[1080px] px-6">
          <h1 className="mt-[132px] font-paperlogy-heading text-[40px] font-bold text-grayscale-00">
            반려생활
          </h1>
          <div className="mt-2 flex flex-col items-start gap-4 font-medium">
            <p className="text-3xl text-primary-00">
              스마트커버 인슈어런스의 반려생활 콘텐츠는 핏펫과 함께합니다.
            </p>
          </div>
          <Image
            alt="lifestyle_logo"
            className="absolute right-6 top-[184px] z-0 -translate-y-1/2 transform"
            src="/assets/lifestyle_logo.webp"
            width={170.82}
            height={136}
          />
        </div>
      </div>
      <div className="w-[1080px] px-6">{children}</div>
    </section>
  );
}

import React from "react";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[calc(100vh-440px)] flex-col items-center">
      <div className="flex h-[284px] w-full justify-center bg-primary-50">
        <h1 className="mt-[154px] w-[1080px] px-6 font-paperlogy-heading text-[40px] text-white">
          개인정보처리방침
        </h1>
      </div>
      <div className="bg-white px-4 tablet:px-6 desktop:w-[1080px]">
        {children}
      </div>
    </section>
  );
}

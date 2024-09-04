import React from "react";
import Image from "next/image";
import { CloseIcon } from "@public/svg";

function PhonePopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-[312px] w-[536px] flex-col rounded-3xl bg-primary-50 px-12 text-grayscale-00">
        <div className="mt-10 flex gap-[72px]">
          <p className="mt-2 font-paperlogy-heading text-[40px]">
            010-5748-1800
          </p>
          <CloseIcon
            onClick={onClose}
            className="cursor-pointer stroke-primary-00"
          />
        </div>

        <p className="mt-2 font-paperlogy-title text-3xl">
          전화 문의로
          <br />
          무엇이든 물어보세요!
        </p>

        <div className="mt-6 text-xl text-primary-10">
          <p className="font-semibold">상담 시간</p>
          <p className="font-regular">월-금 9:00-18:00</p>
        </div>

        <Image
          src="/assets/DOG_mini.webp"
          alt="Dog Image"
          width={207}
          height={198}
          className="absolute bottom-0 right-6"
        />
      </div>
    </div>
  );
}

export default PhonePopup;

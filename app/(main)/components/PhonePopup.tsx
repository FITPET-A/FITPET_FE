import React from "react";
import Image from "next/image";

function PhonePopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative h-[312px] w-[536px] rounded-[24px] bg-primary-50 text-grayscale-00">
        <button
          className="absolute right-[44px] top-[40px]"
          onClick={onClose}
          type="button"
        >
          <Image
            src="/assets/closeButton.webp"
            alt="Close Button"
            width={16}
            height={16}
          />
        </button>

        <div className="ml-12 mt-12">
          <p className="font-paperlogy-heading text-[40px]">010-5748-1800</p>

          <p className="ont-paperlogy-title mt-2 text-[24px]">
            전화 문의로
            <br />
            무엇이든 물어보세요!
          </p>

          <div className="mt-6 text-xl text-primary-10">
            <p className="font-semibold">상담 시간</p>
            <p className="font-regular">월-금 9:00-18:00</p>
          </div>
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

import { CloseIcon } from "@public/svg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SubmissionPopupProps {
  title: string;
  onClose: () => void;
}

export default function SubmissionPopup({
  title,
  onClose,
}: SubmissionPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="flex h-[358px] w-[358px] flex-col items-center rounded-3xl px-6 tablet:h-[536px] tablet:w-[536px] tablet:px-12"
        style={{ background: "linear-gradient(180deg, #FFF 0%, #CDE8FF 100%)" }}
      >
        <CloseIcon
          className="mt-6 cursor-pointer self-end stroke-primary-30 tablet:mt-10"
          onClick={handleClose}
        />
        <div className="mt-2 font-paperlogy-heading text-[28px] text-primary-50 tablet:mt-0 tablet:text-[40px]">
          {title}
        </div>
        <div className="mt-1 font-paperlogy-title text-base text-primary-30 tablet:mt-2 tablet:text-3xl">
          빠른 시일 내에 답변드리겠습니다!
        </div>
        <Image
          alt="submission"
          src="/assets/DOG_submission.webp"
          width={401}
          height={413}
          className="mt-[49px] hidden tablet:flex"
        />
        <Image
          alt="submission"
          src="/assets/DOG_submission.webp"
          width={246}
          height={253}
          className="mt-[33px] tablet:hidden"
        />
      </div>
    </div>
  );
}

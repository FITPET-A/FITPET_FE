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
        className="flex h-[536px] w-[536px] flex-col items-center rounded-3xl px-12"
        style={{ background: "linear-gradient(180deg, #FFF 0%, #CDE8FF 100%)" }}
      >
        <CloseIcon
          className="mt-10 cursor-pointer self-end stroke-primary-30"
          onClick={handleClose}
        />
        <div className="font-paperlogy-heading text-[40px] text-primary-50">
          {title}
        </div>
        <div className="mt-2 font-paperlogy-title text-3xl text-primary-30">
          빠른 시일 내에 답변드리겠습니다!
        </div>
        <Image
          alt="submission"
          src="/assets/DOG_submission.webp"
          width={401}
          height={413}
          className="mt-[49px]"
        />
      </div>
    </div>
  );
}

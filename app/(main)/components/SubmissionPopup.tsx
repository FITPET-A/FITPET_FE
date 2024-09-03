import { CloseIcon } from "@public/svg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SubmissionPopupProps {
  onClose: () => void;
}

export default function SubmissionPopup({ onClose }: SubmissionPopupProps) {
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
        <button
          type="button"
          onClick={handleClose}
          className="mt-10 self-end"
          aria-label="Close submission popup"
        >
          <CloseIcon className="stroke-primary-30" />
        </button>
        <div className="font-paperlogy-heading text-[40px] text-primary-50">
          견적서 접수 완료
        </div>
        <div className="mt-2 font-paperlogy-title text-3xl text-primary-30">
          24시간 내에 카카오톡으로 보내드려요!
        </div>
        <Image
          alt="submission"
          src="/assets/submission.webp"
          width={300}
          height={300}
          className="mt-6"
        />
      </div>
    </div>
  );
}

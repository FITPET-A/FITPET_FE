import { CloseIcon } from "@public/svg";

import { useEffect, useState } from "react";

interface PolicyModalProps {
  detail: string;
  onClose: () => void;
}

export default function PolicyModal({ detail, onClose }: PolicyModalProps) {
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
      <div className="flex max-h-[80vh] w-[294px] max-w-[90vw] flex-col items-center gap-4 overflow-auto rounded-3xl bg-white p-6 tablet:w-[536px] tablet:gap-6 tablet:p-10">
        <div className="flex w-full items-center justify-between">
          <span className="font-paperlogy-title text-xl text-grayscale-100 tablet:text-3xl">
            개인정보처리방침
          </span>
          <CloseIcon
            className="cursor-pointer stroke-grayscale-60"
            onClick={handleClose}
          />
        </div>
        <p className="whitespace-pre-line text-[14px] text-grayscale-80 tablet:text-xl tablet:font-regular">
          {detail}
        </p>
      </div>
    </div>
  );
}

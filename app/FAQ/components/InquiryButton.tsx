"use client";

import InquiryModal from "@components/InquiryModal";
import { useState } from "react";

function InquiryButton() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleInquiryModalClose = () => {
    setIsInquiryModalOpen(false);
  };
  return (
    <>
      <button
        type="button"
        onClick={() => setIsInquiryModalOpen(true)}
        className="w-[120px] rounded-[80px] bg-primary-60 py-1 text-sm font-medium text-primary-00 tablet:text-lg"
      >
        1:1 문의하기
      </button>
      {isInquiryModalOpen && <InquiryModal onClose={handleInquiryModalClose} />}
    </>
  );
}

export default InquiryButton;

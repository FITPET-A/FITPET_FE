"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import KAKAO_CONTACT_URL from "@constants/kakao_contact";
import ROUTES from "@constants/path";

import ContactButtonIcon from "@public/svg/contactButton.svg";
import ContactCloseButtonIcon from "@public/svg/contactCloseButton.svg";
import CallIcon from "@public/svg/call.svg";
import KakaoIcon from "@public/svg/kakao.svg";
import MessageIcon from "@public/svg/message.svg";

import PhonePopup from "./PhonePopup";

function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 모바일 환경 확인 함수 (모든 휴대폰 및 추가 애플 기기)
  const isMobile = (): boolean =>
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // 버튼 기능
  const handleButtonClick = (
    type: "kakao" | "phone" | "faq" | "contact",
  ): void => {
    switch (type) {
      case "kakao":
        window.location.href = KAKAO_CONTACT_URL;
        break;
      case "phone":
        if (isMobile()) {
          // 모바일에서는 바로 전화를 걸 수 있게 설정
          window.location.href = "tel:010-5738-1800";
        } else {
          // 데스크탑에서는 팝업을 띄움
          setShowPhonePopup(true);
        }
        break;
      case "faq":
        router.push(`${ROUTES.FAQ}`);
        setIsOpen(false);
        break;
      case "contact":
        alert("1:1 문의 창구입니다.");
        break;
      default:
        break;
    }
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setShowPhonePopup(false);
  };

  // 버튼 공통 스타일 변수 생성
  const buttonBaseClasses = "transition-transform duration-500 ease-out";
  const containerBaseClasses =
    "flex items-center justify-center rounded-3xl font-bold transition-transform duration-300";

  return (
    <div className="relative">
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />}
      {showPhonePopup && <PhonePopup onClose={closePopup} />}

      <div className="fixed bottom-[80px] right-[128px] z-40">
        <div className="relative">
          {/* 문의 버튼 */}
          <button
            type="button"
            onClick={toggleMenu}
            className={`flex h-[104px] w-[104px] rounded-full ${containerBaseClasses} ${
              isOpen ? "bg-grayscale-00" : "bg-primary-50"
            }`}
          >
            {isOpen ? <ContactCloseButtonIcon /> : <ContactButtonIcon />}
          </button>

          {/* 4가지 버튼 목록 */}
          <div
            className={`absolute bottom-24 right-0 flex w-max flex-col items-end gap-6 text-xl font-semibold text-grayscale-80 transition-all ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: "400ms" }}
          >
            {[
              {
                label: "1:1 문의",
                type: "contact",
                delay: "0.45s",
                Icon: MessageIcon,
                customStyle: "bg-grayscale-00 text-grayscale-80",
              },
              {
                label: "전화 문의",
                type: "phone",
                delay: "0.3s",
                Icon: CallIcon,
                customStyle: "bg-grayscale-00 text-grayscale-80",
              },
              {
                label: "자주 묻는 질문",
                type: "faq",
                delay: "0.15s",
                customStyle: "bg-grayscale-00 text-grayscale-80",
              },
              {
                label: "카카오톡 문의",
                type: "kakao",
                delay: "0.01s",
                Icon: KakaoIcon,
                customStyle: "bg-[#FAE100] text-[#3C1D1E]",
              },
            ].map(({ label, type, delay, Icon, customStyle }) => (
              <button
                type="button"
                key={type}
                onClick={() =>
                  handleButtonClick(
                    type as "kakao" | "phone" | "faq" | "contact",
                  )
                }
                className={`${buttonBaseClasses} px-6 py-3 ${
                  isOpen ? "translate-y-0 scale-100" : "translate-y-10 scale-0"
                } ${customStyle ?? ""}`}
                style={{
                  transitionDelay: delay,
                  borderRadius: "64px 32px 8px 64px",
                }}
              >
                {Icon && <Icon className="mr-2 inline-block" />}
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactButton;

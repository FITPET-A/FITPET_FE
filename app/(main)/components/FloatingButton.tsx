"use client";

import React, { useState } from "react";
import Image from "next/image";
import PhonePopup from "./PhonePopup";

function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const contactButtonImage = "/assets/contactButton.webp";
  const contactCloseButtonImage = "/assets/contactCloseButton.webp";
  const callImage = "/assets/call.webp";
  const kakaoImage = "/assets/kakao.webp";
  const contactImage = "/assets/contact.webp";

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
        window.location.href =
          "https://accounts.kakao.com/login/simple/?continue=https%3A%2F%2Fpf.kakao.com%2F_cxdAfG%2Fchat%3Fapi_ver%3D1.1%26kakao_agent%3Dsdk%252F1.43.5%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fsmartcoverins.co.kr%26app_key%3Deaee99f853daf0ece04623eef69503fe%26referer%3Dhttps%253A%252F%252Fsmartcoverins.co.kr%252F&talk_login=#simpleLogin";
        break;
      case "phone":
        if (isMobile()) {
          window.location.href = "tel:010-1234-5678";
        } else {
          // 데스크탑에서는 팝업을 띄움
          setShowPhonePopup(true);
        }
        break;
      case "faq":
        window.location.href = "/FAQ/page.tsx";
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
  const buttonBaseClasses =
    "h-10 rounded-lg border border-slate-600 bg-grayscale-00 text-grayscale-80 transition-transform duration-500 ease-out";
  const containerBaseClasses =
    "flex items-center justify-center rounded-3xl font-bold transition-transform duration-300";

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-grayscale-110 opacity-90" />
      )}
      {showPhonePopup && <PhonePopup onClose={closePopup} />}

      <div className="fixed right-[196px] top-[600px] z-50">
        <div className="relative">
          {/* 문의 버튼 */}
          <button
            type="button"
            onClick={toggleMenu}
            className={`flex h-[52px] w-[52px] rounded-[64px] ${containerBaseClasses} ${
              isOpen ? "bg-grayscale-00" : "bg-primary-50"
            }`}
          >
            <Image
              src={isOpen ? contactCloseButtonImage : contactButtonImage}
              alt={isOpen ? "Close Button" : "Contact Button"}
              width={24}
              height={24}
            />
          </button>

          {/* 4가지 버튼 목록 */}
          <div
            className={`absolute bottom-20 right-0 flex w-max flex-col items-end gap-6 text-xl font-semibold text-grayscale-80 transition-all ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: "400ms" }}
          >
            {[
              {
                label: "1:1 문의",
                type: "contact",
                delay: "0.45s",
                imageSrc: contactImage,
              },
              {
                label: "전화 문의",
                type: "phone",
                delay: "0.3s",
                imageSrc: callImage,
              },
              { label: "자주 묻는 질문", type: "faq", delay: "0.15s" },
              {
                label: "카카오톡 문의",
                type: "kakao",
                delay: "0.01s",
                imageSrc: kakaoImage,
                customStyle: "bg-[#FAE100] border-none text-[#3C1D1E]",
              },
            ].map(({ label, type, delay, imageSrc, customStyle }) => (
              <button
                type="button"
                key={type}
                onClick={() =>
                  handleButtonClick(
                    type as "kakao" | "phone" | "faq" | "contact",
                  )
                }
                className={`${buttonBaseClasses} ${
                  isOpen ? "translate-y-0 scale-100" : "translate-y-10 scale-0"
                } ${customStyle ?? ""}`}
                style={{
                  transitionDelay: delay,
                  padding: "12px",
                  borderRadius: "64px 48px 24px 64px",
                  height: "54px",
                }}
              >
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={`${label} icon`}
                    width={20}
                    height={20}
                    className="mr-2 inline-block"
                  />
                )}
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

import {
  CloseIcon,
  DocumentIcon,
  MessageIcon,
  PetIcon,
  QuestionIcon,
} from "@public/svg";
import ROUTES from "@constants/path";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import InquiryModal from "./InquiryModal";

interface SideMenuProps {
  isSideMenuOpen: boolean;
  onToggleMenu: () => void;
}

function SideMenu({ isSideMenuOpen, onToggleMenu }: SideMenuProps) {
  const pathname = usePathname();
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleLinkClick = () => {
    onToggleMenu();
  };

  const handleInquiryModalClose = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[256px] transform flex-col items-center bg-white transition-transform duration-300 tablet:w-[512px] ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-6 flex w-full flex-col pl-6 pr-4 tablet:pr-6">
          <CloseIcon
            onClick={onToggleMenu}
            className="cursor-pointer self-end stroke-grayscale-60"
          />
          <div className="relative mt-[18px] w-full rounded-2xl bg-primary-50 p-4">
            <div className="flex flex-col items-start">
              <div className="text-md font-semibold text-white tablet:text-lg">
                도움이 <br className="tablet:hidden" /> 필요하신가요?
              </div>
              <div className="hidden text-sm font-medium text-primary-10 tablet:block">
                1:1 문의하기
              </div>
            </div>
            <Image
              alt="dog_side_menu"
              src="/assets/DOG_side_menu.webp"
              width={91}
              height={90}
              className="absolute -top-[10px] right-[10px] tablet:right-[15px]"
            />
            <button
              type="button"
              aria-label="1:1 question"
              onClick={() => setIsInquiryModalOpen(true)}
              className="absolute right-0 top-0 h-20 w-full rounded-2xl bg-transparent"
            />
          </div>
        </div>
        <nav className="mt-6 w-full">
          <ul>
            <li>
              <Link
                href={ROUTES.HOME}
                className={`flex w-full items-center gap-2 px-6 py-4 hover:bg-grayscale-05 hover:text-grayscale-100 ${
                  pathname === ROUTES.HOME
                    ? "bg-grayscale-05 text-grayscale-100"
                    : "text-grayscale-60"
                }`}
                onClick={handleLinkClick}
              >
                <DocumentIcon />
                <div className="text-md font-semibold">간편 견적 받기</div>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.LIFESTYLE}
                className={`flex w-full items-center gap-2 px-6 py-4 hover:bg-grayscale-05 ${
                  pathname === ROUTES.LIFESTYLE
                    ? "bg-grayscale-05 text-grayscale-100"
                    : "text-grayscale-60"
                }`}
                onClick={handleLinkClick}
              >
                <PetIcon />
                <div className="text-md font-semibold">반려생활</div>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.FAQ}
                className={`flex w-full items-center gap-2 px-6 py-4 hover:bg-grayscale-05 ${
                  pathname === ROUTES.FAQ
                    ? "bg-grayscale-05 text-grayscale-100"
                    : "text-grayscale-60"
                }`}
                onClick={handleLinkClick}
              >
                <QuestionIcon />
                <div className="text-md font-semibold">자주 묻는 질문</div>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PARTNERSHIP}
                className={`flex w-full items-center gap-2 px-6 py-4 hover:bg-grayscale-05 ${
                  pathname === ROUTES.PARTNERSHIP
                    ? "bg-grayscale-05 text-grayscale-100"
                    : "text-grayscale-60"
                }`}
                onClick={handleLinkClick}
              >
                <MessageIcon />
                <div className="text-md font-semibold">제휴 제안</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isInquiryModalOpen && <InquiryModal onClose={handleInquiryModalClose} />}
    </>
  );
}

export default SideMenu;

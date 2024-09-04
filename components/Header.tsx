"use client";

import { useState, useEffect } from "react";
import ROUTES from "@constants/path";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon } from "@public/svg";
import Nav from "./Nav";
import SideMenu from "./SideMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header
        className={`fixed left-0 right-0 top-0 z-30 hidden h-[84px] w-full items-center justify-center transition-colors duration-500 desktop:flex ${
          isScrolled ? "bg-white shadow-md" : "bg-primary-50"
        }`}
      >
        <div className="flex w-[1080px] justify-between px-6">
          <Link href={ROUTES.HOME}>
            {isScrolled ? (
              <Image
                src="/assets/sc_logo_color.webp"
                width={155}
                height={40}
                alt="sc_logo_color"
                priority
              />
            ) : (
              <Image
                src="/assets/sc_logo_white.webp"
                width={155}
                height={40}
                alt="sc_logo_white"
                priority
              />
            )}
          </Link>
          <Nav isScrolled={isScrolled} />
        </div>
      </header>
      <header
        className={`fixed left-0 right-0 top-0 z-30 flex h-14 w-full items-center justify-center px-4 transition-colors duration-500 tablet:h-16 tablet:pl-8 tablet:pr-6 desktop:hidden ${
          isScrolled ? "bg-white shadow-md" : "bg-primary-50"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <Link href={ROUTES.HOME} className="hidden tablet:block">
            {isScrolled ? (
              <Image
                src="/assets/sc_logo_color.webp"
                width={124}
                height={32}
                alt="sc_logo_color_mobile"
                priority
              />
            ) : (
              <Image
                src="/assets/sc_logo_white.webp"
                width={124}
                height={32}
                alt="sc_logo_white_mobile"
                priority
              />
            )}
          </Link>
          <Link href={ROUTES.HOME} className="tablet:hidden">
            {isScrolled ? (
              <Image
                src="/assets/sc_logo_color.webp"
                width={93}
                height={24}
                alt="sc_logo_color_mobile"
                priority
              />
            ) : (
              <Image
                src="/assets/sc_logo_white.webp"
                width={93}
                height={24}
                alt="sc_logo_white_mobile"
                priority
              />
            )}
          </Link>
          <HamburgerIcon
            onClick={handleToggleMenu}
            className={`${isScrolled ? "stroke-[#34343D]" : "stroke-white"} cursor-pointer`}
          />
        </div>
      </header>
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        onToggleMenu={handleToggleMenu}
      />
      {isSideMenuOpen && (
        <div
          role="button"
          aria-label="Close menu"
          tabIndex={0}
          className="fixed inset-0 z-40 cursor-default bg-black opacity-50"
          onClick={handleToggleMenu}
          onKeyDown={() => {}}
        />
      )}
    </div>
  );
}

export default Header;

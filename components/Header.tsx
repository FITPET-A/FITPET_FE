"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useClientMediaQuery from "@hooks/useClientMediaQuery";
import Link from "next/link";
import { HamburgerIcon } from "@public/svg";
import Nav from "./Nav";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const isDesktop = useClientMediaQuery("(min-width: 1080px)");

  return (
    <div>
      {isDesktop ? (
        <header
          className={`fixed left-0 right-0 top-0 z-40 flex h-[84px] w-full items-center justify-center transition-colors duration-500 ${
            isScrolled ? "bg-white shadow-md" : "bg-primary-50"
          }`}
        >
          <div className="flex w-[1080px] min-w-[1080px] justify-between px-6">
            <Link href="/">
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
      ) : (
        <header
          className={`fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-center px-4 transition-colors duration-500 ${
            isScrolled ? "bg-white shadow-md" : "bg-primary-50"
          }`}
        >
          <div className="flex w-full justify-between">
            <Link href="/">
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
              className={`${isScrolled ? "stroke-[#34343D]" : "stroke-white"}`}
            />
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-[84px] w-full items-center justify-center overflow-x-auto transition-colors duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-primary-50"
      }`}
    >
      <div className="flex w-[1080px] justify-between">
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
  );
}

export default Header;

"use client";

import ROUTES from "@constants/path";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: ROUTES.QUICK_QUOTE, label: "간편 견적 받기" },
  { href: ROUTES.LIFESTYLE, label: "반려생활" },
  { href: ROUTES.FAQ, label: "자주 묻는 질문" },
  { href: ROUTES.PARTNERSHIP, label: "제휴 제안" },
];

function Nav({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center" aria-label="네비게이션">
      <ul
        className={`flex space-x-8 text-lg ${isScrolled ? "text-grayscale-50" : "text-primary-10"}`}
      >
        {menuItems.map((item) => {
          let linkClass = "";

          if (pathname === item.href) {
            linkClass = isScrolled
              ? "font-semibold text-black"
              : "font-semibold text-grayscale-00";
          } else {
            linkClass = isScrolled
              ? "hover:font-semibold hover:text-black"
              : "hover:font-semibold hover:text-grayscale-00";
          }

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-label={`${item.label} 페이지로 이동`}
                className={linkClass}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;

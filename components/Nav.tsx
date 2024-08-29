"use client";

import ROUTES from "@constants/path";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: ROUTES.HOME, label: "간편 견적 받기" },
  { href: ROUTES.LIFESTYLE, label: "반려생활" },
  { href: ROUTES.FAQ, label: "자주 묻는 질문" },
  { href: ROUTES.PARTNERSHIP, label: "제휴 제안" },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center" aria-label="네비게이션">
      <ul className="flex space-x-8 text-lg text-primary-10">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-label={`${item.label} 페이지로 이동`}
              className={`${
                pathname === item.href
                  ? "font-semibold text-grayscale-00"
                  : "hover:font-semibold hover:text-grayscale-00"
              } `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

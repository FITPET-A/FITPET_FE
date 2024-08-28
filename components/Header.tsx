import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex h-[84px] items-center justify-center bg-primary-50">
      <div className="flex w-[1080px] justify-between">
        <Link href="/">
          <Image
            src="/assets/sc_logo_white.webp"
            width={155}
            height={40}
            alt="sc_logo_white"
            priority
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;

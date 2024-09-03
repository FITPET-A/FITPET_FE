import Image from "next/image";
import PartnershipFormBox from "./components/PartnershipFormBox";

export default function PartnershipPage() {
  return (
    <div className="relative mt-[170px] flex flex-col px-[40px]">
      <div className="font-paperlogy-heading text-[40px] text-white">
        건강한 반려생활 함께 만들어갈 <br />
        소중한 파트너를 찾고 있어요
      </div>
      <Image
        alt="marty"
        className="absolute -top-10 right-[76px] z-0"
        src="/assets/DOG_partnership.webp"
        width={215}
        height={290}
      />
      <PartnershipFormBox />
    </div>
  );
}

import Image from "next/image";
import PartnershipFormBox from "./components/PartnershipFormBox";

export default function PartnershipPage() {
  return (
    <div className="relative mt-[88px] flex flex-col px-6 tablet:mt-[130px] desktop:mt-[170px] desktop:px-[40px]">
      <div className="hidden font-paperlogy-heading text-[40px] text-white tablet:block">
        건강한 반려생활 함께 만들어갈 <br />
        소중한 파트너를 찾고 있어요
      </div>
      <div className="font-paperlogy-title text-3xl text-white tablet:hidden">
        건강한 반려생활 <br /> 함께 만들어갈 <br />
        파트너를 찾고 있어요
      </div>
      <Image
        alt="marty"
        className="absolute -top-10 right-14 z-0 hidden tablet:block desktop:right-[76px]"
        src="/assets/DOG_partnership.webp"
        width={215}
        height={290}
      />
      <Image
        alt="marty"
        className="absolute right-8 top-3 z-0 tablet:hidden"
        src="/assets/DOG_partnership.webp"
        width={119}
        height={160}
      />
      <PartnershipFormBox />
    </div>
  );
}

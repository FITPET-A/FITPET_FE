import Image from "next/image";

export default function LandingSection1() {
  return (
    // [영역 1] 펫보험 전문가가 우리 아이 보험을 추천해 드려요
    <section className="mt-[306px] flex w-full justify-between px-4 tablet:px-[240px]">
      <div className="max-w-[600px]">
        <h2 className="font-paperlogy-heading text-[40px] text-grayscale-100 tablet:text-[32px]">
          펫보험 전문가가 <br />
          우리 아이 보험을 추천해 드려요!
        </h2>
        <p className="mt-10 font-paperlogy-title text-[24px] text-grayscale-60 tablet:text-[20px]">
          어렵고 낯선 펫보험, <br />
          우리 아이와 더 오래 함께할 <br />
          최고의 선택이 되도록 도와드릴게요.
        </p>
      </div>
      <div className="relative">
        <Image
          src="/assets/DOG_main_landing.webp"
          alt="main landing dog image"
          className="object-cover"
          width={340}
          height={378}
        />
      </div>
    </section>
  );
}

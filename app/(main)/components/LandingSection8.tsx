import Link from "next/link";
import Image from "next/image";

export default function LandingSection8() {
  return (
    // [영역 8] 우리가족의 행복을 위한 펫보험, 스마트커버인슈어런스가 함께할게요
    <section className="relative flex w-full flex-col items-center bg-primary-50">
      <p className="relative pt-10 text-center font-paperlogy-heading text-[24px] text-grayscale-00 desktop:pt-[100px] desktop:text-[40px]">
        우리가족의 행복을 위한 펫보험, <br />
        스마트커버인슈어런스가 함께할게요
      </p>
      <Image
        src="/assets/love.webp"
        alt="Love icon"
        className="desktop:bolck absolute left-[calc(50%-480px)] top-[154px]"
        width={68}
        height={61}
      />
      {/* 클릭 시 메인 페이지 상단으로 이동함 */}
      <Link href="/">
        <button
          type="button"
          className="mb-12 mt-12 rounded-2xl bg-grayscale-00 px-[125px] py-[16px] text-center font-paperlogy-title text-[16px] text-primary-50 desktop:mb-[118px] desktop:w-[483px] desktop:text-[32px]"
        >
          빠른 견적 받기
        </button>
      </Link>
      <Image
        src="/assets/semicircle.webp"
        alt="Semicircle icon"
        className="absolute bottom-0 z-10 hidden tablet:right-[calc(50%-280px)] desktop:right-[calc(50%-480px)] desktop:block"
        width={258}
        height={258}
      />
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function LandingSection8() {
  return (
    // [영역 8] 우리가족의 행복을 위한 펫보험, 스마트커버인슈어런스가 함께할게요
    <section className="relative flex w-full flex-col items-center bg-primary-50">
      <p className="relative pt-[100px] text-center font-paperlogy-heading text-[40px] text-grayscale-00">
        우리가족의 행복을 위한 펫보험, <br />
        스마트커버인슈어런스가 함께할게요
      </p>
      <Image
        src="/assets/love.webp"
        alt="Love icon"
        className="absolute left-[calc(50%-480px)] top-[154px]"
        width={68}
        height={61}
      />
      {/* 클릭 시 메인 페이지 상단으로 이동함 */}
      <Link href="/">
        <button
          type="button"
          className="mb-[118px] mt-12 h-20 w-[483px] rounded-2xl bg-grayscale-00 px-10 py-2 text-center font-paperlogy-title text-[32px] text-primary-50"
        >
          빠른 견적 받기
        </button>
      </Link>
      <Image
        src="/assets/star.webp"
        alt="Star icon"
        className="absolute bottom-[42px] right-[calc(50%-270px)] z-20"
        width={45}
        height={45}
      />
      <Image
        src="/assets/semicircle.webp"
        alt="Semicircle icon"
        className="absolute bottom-0 right-[calc(50%-480px)] z-10"
        width={258}
        height={258}
      />
    </section>
  );
}

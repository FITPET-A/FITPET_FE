import Image from "next/image";

export default function LandingSection1() {
  return (
    <section className="mt-[200px] flex w-full justify-center">
      <div className="px-4 desktop:w-[1080px] desktop:px-6">
        <div className="flex flex-col tablet:items-end desktop:flex-row desktop:items-center desktop:justify-between">
          <div className="tablet:w-[543px]">
            <h2 className="font-paperlogy-heading text-[24px] text-grayscale-100 desktop:text-[40px]">
              펫보험 전문가가 <br />
              우리 아이 보험을 추천해 드려요!
            </h2>
            <p className="mt-10 font-paperlogy-title text-[16px] text-grayscale-60 desktop:text-[24px]">
              어렵고 낯선 펫보험, <br />
              우리 아이와 더 오래 함께할 <br />
              최고의 선택이 되도록 도와드릴게요.
            </p>
          </div>
          <div className="right-0 mt-10 tablet:self-end desktop:self-auto">
            <Image
              src="/assets/DOG_main_landing.webp"
              alt="main landing dog image"
              width={340}
              height={378}
              className="h-[355px] w-[320px] items-end object-contain desktop:h-[378px] desktop:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

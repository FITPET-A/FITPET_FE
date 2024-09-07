import Image from "next/image";

export default function LandingSection6() {
  return (
    // [영역 6] 전문가와의 1:1 카톡 상담 및 가입과 청구까지 걱정없이
    <section className="flex w-full flex-col items-center bg-grayscale-100 pb-[355px] pt-[259px]">
      <div className="flex w-[1080px] flex-col">
        <div className="flex items-center justify-between">
          <div className="text-left text-grayscale-00">
            <p className="text-right font-paperlogy-heading tablet:text-[24px] desktop:text-[40px]">
              전문가와의 1:1 카톡 상담
            </p>
            <p className="mt-6 font-paperlogy-title tablet:text-[15px] desktop:text-[24px]">
              궁금한 점은 펫보험 전문가에게 편하게 물어보세요.
            </p>
          </div>
          <Image
            src="/assets/landing_counsel.webp"
            alt="Dog Helping Image"
            width={321}
            height={310}
            className="object-cover tablet:h-[240px] tablet:w-[249px] desktop:h-[310px] desktop:w-[321px]"
          />
        </div>
        <div className="mt-[142px] flex items-center justify-between">
          <Image
            src="/assets/landing_accession.webp"
            alt="Insurance Offer Image"
            width={341}
            height={339}
            className="object-cover tablet:h-[240px] tablet:w-[249px] desktop:h-[310px] desktop:w-[321px]"
          />
          <div className="text-right text-grayscale-00 tablet:px-20">
            <p className="font-paperlogy-heading tablet:text-[24px] desktop:text-[40px]">
              가입과 청구까지 걱정없이
            </p>
            <p className="mt-[30px] font-paperlogy-title tablet:text-[15px] desktop:text-[24px]">
              복잡한 보험 가입과 보험금 청구도 한 번에 처리드려요.
            </p>
          </div>
        </div>
      </div>
      {/* 아래 컨텐츠 */}
      <p className="mt-[303px] font-paperlogy-heading text-grayscale-00 tablet:text-left tablet:text-[24px] desktop:text-center desktop:text-[40px]">
        막막한 펫보험, <br />
        이제는 안심하세요!
      </p>

      <div className="relative mt-[81px] flex space-x-10">
        <div className="flex flex-col items-center rounded-[20px] bg-grayscale-05 tablet:h-[258px] tablet:w-[342px] desktop:h-[478px] desktop:w-[470px]">
          <p className="text-center font-medium text-grayscale-70 tablet:mt-10 tablet:text-[20px] desktop:mt-[58px] desktop:text-[24px]">
            정확하고 객관적인 정보만을 <br />
            안내드려요
          </p>
          <Image
            src="/assets/book.webp"
            alt="book image"
            width={136}
            height={168}
            className="tablet:mt-6 desktop:mt-[52px]"
          />
        </div>

        <div className="z-10 flex flex-col items-center rounded-[20px] bg-grayscale-05 tablet:h-[258px] tablet:w-[342px] desktop:h-[478px] desktop:w-[470px]">
          <p className="text-center font-medium text-grayscale-70 tablet:mt-10 tablet:text-[20px] desktop:mt-[73px] desktop:text-[24px]">
            불필요한 가입 강요 없어요
          </p>
          <Image
            src="/assets/good.webp"
            alt="good image"
            width={157}
            height={134}
            className="tablet:mt-6 desktop:mt-[76px]"
          />
        </div>
        <Image
          src="/assets/DOG_glasses.webp"
          alt="Dog with Glasses"
          width={249}
          height={335}
          className="absolute -top-[253px] right-[37px] z-0"
        />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function LandingSection6() {
  return (
    <section className="flex w-full flex-col items-center bg-grayscale-100 pb-[355px] pt-[259px]">
      <div className="flex flex-col tablet:max-w-[760px] desktop:w-[1080px]">
        {/* 첫 번째 블록 */}
        <div className="flex flex-col items-center tablet:flex-row tablet:justify-between">
          <div className="text-center text-grayscale-00 tablet:text-left">
            <p className="font-paperlogy-heading text-[24px] desktop:text-[40px]">
              전문가와의 1:1 카톡 상담
            </p>
            <p className="mt-6 font-paperlogy-title text-[15px] desktop:text-[24px]">
              궁금한 점은 펫보험 전문가에게 편하게 물어보세요.
            </p>
          </div>
          <Image
            src="/assets/landing_counsel.webp"
            alt="Dog Helping Image"
            width={321}
            height={310}
            className="mt-6 h-[240px] w-[249px] object-cover tablet:mt-0 desktop:h-[310px] desktop:w-[321px]"
          />
        </div>

        {/* 두 번째 블록 */}
        <div className="mt-[142px] flex flex-col items-center tablet:flex-row tablet:justify-between">
          <Image
            src="/assets/landing_accession.webp"
            alt="Insurance Offer Image"
            width={341}
            height={339}
            className="mt-6 h-[240px] w-[241px] object-cover tablet:mt-0 desktop:h-[339px] desktop:w-[341px]"
          />
          <div className="text-center text-grayscale-00 tablet:px-20 tablet:text-left">
            <p className="font-paperlogy-heading text-[24px] desktop:text-[40px]">
              가입과 청구까지 걱정없이
            </p>
            <p className="mt-[30px] font-paperlogy-title text-[15px] desktop:text-[24px]">
              복잡한 보험 가입과 보험금 청구도 한 번에 처리드려요.
            </p>
          </div>
        </div>
      </div>

      {/* 아래 컨텐츠 */}
      <div>
        <p className="mt-[303px] text-center font-paperlogy-heading text-[24px] text-grayscale-00 desktop:text-[40px]">
          막막한 펫보험, <br />
          이제는 안심하세요!
        </p>

        <div className="relative mt-[81px] flex w-[300px] flex-wrap justify-center space-y-4 tablet:w-[724px] tablet:space-x-8 tablet:space-y-0 desktop:w-[1080px]">
          <div className="z-10 flex h-[258px] w-[342px] flex-col items-center rounded-[20px] bg-grayscale-05 desktop:h-[478px] desktop:w-[470px]">
            <p className="mt-10 text-center text-[20px] font-medium text-grayscale-70 desktop:mt-[58px] desktop:text-[24px]">
              정확하고 객관적인 정보만을 <br />
              안내드려요
            </p>
            <Image
              src="/assets/book.webp"
              alt="book image"
              width={136}
              height={168}
              className="z-0 h-[96px] w-[78px] mobile:mt-6 tablet:mt-6 desktop:mt-[52px] desktop:h-[168px] desktop:w-[136px]"
            />
          </div>

          <div className="z-10 flex h-[258px] w-[342px] flex-col items-center rounded-[20px] bg-grayscale-05 desktop:h-[478px] desktop:w-[470px]">
            <p className="mt-10 text-center text-[20px] font-medium text-grayscale-70 tablet:mt-14 desktop:mt-[73px] desktop:text-[24px]">
              불필요한 가입 강요 없어요
            </p>
            <Image
              src="/assets/good.webp"
              alt="good image"
              width={157}
              height={134}
              className="h-[86px] w-[101px] mobile:mt-10 tablet:mt-6 desktop:mt-[76px] desktop:h-[134px] desktop:w-[157px]"
            />
          </div>

          <Image
            src="/assets/DOG_glasses.webp"
            alt="Dog with Glasses"
            width={249}
            height={335}
            className="absolute -top-[120px] z-0 h-[180px] w-[134px] mobile:-top-[130px] mobile:right-0 tablet:right-2 desktop:-top-[253px] desktop:right-14 desktop:h-[335px] desktop:w-[249px]"
          />
        </div>
      </div>
    </section>
  );
}

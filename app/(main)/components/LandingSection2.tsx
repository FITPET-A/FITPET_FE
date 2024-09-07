import Image from "next/image";

export default function LandingSection2() {
  return (
    <section className="flex w-full flex-col items-center pt-[200px] desktop:pt-[286px]">
      <div className="w-full max-w-[1080px] px-4">
        <p className="text-center font-paperlogy-heading text-[24px] text-primary-50 desktop:text-[40px]">
          간단한 정보 입력만으로 부담없이
        </p>
        <div className="mt-[50px] flex flex-col items-center justify-center gap-6 tablet:flex-row tablet:flex-wrap tablet:gap-10 desktop:mt-[74px]">
          {/* STEP1 */}
          <div className="flex h-[258px] w-[342px] flex-col items-center rounded-[20px] bg-primary-00 tablet:w-[47%] desktop:h-[423px]">
            <p className="rounded-lg bg-primary-50 px-6 py-2 text-center font-paperlogy-heading text-[20px] text-grayscale-00 mobile:mt-4 tablet:mt-6 tablet:text-[24px] desktop:mt-8">
              STEP 1
            </p>
            <p className="mt-2 font-paperlogy-title text-[20px] text-primary-50 desktop:mt-6 desktop:text-[24px]">
              1분 간단 정보 입력하면
            </p>
            <div className="mb-[14px] mt-[8px] flex h-[127px] items-center justify-center desktop:mt-8">
              <Image
                src="/assets/landing_step1.webp"
                alt="STEP1 icon"
                width={333}
                height={198}
                className="h-[127px] w-[227px] object-contain desktop:h-[198px] desktop:w-[333px]"
              />
            </div>
          </div>

          {/* STEP2 */}
          <div className="mt-6 flex h-[258px] w-[342px] flex-col items-center rounded-[20px] bg-primary-00 tablet:mt-0 tablet:w-[47%] desktop:h-[423px]">
            <p className="rounded-lg bg-primary-50 px-6 py-2 text-center font-paperlogy-heading text-[20px] text-grayscale-00 mobile:mt-4 tablet:mt-6 tablet:text-[24px] desktop:mt-8">
              STEP 2
            </p>
            <p className="mt-2 font-paperlogy-title text-[20px] text-primary-50 desktop:mt-6 desktop:text-[24px]">
              카톡으로 펫보험 비교 견적서가 쏙!
            </p>
            <div className="mt-[22px] flex h-[94px] items-center justify-center desktop:mt-11">
              <Image
                src="/assets/landing_step2.webp"
                alt="STEP2 icon"
                width={143}
                height={158}
                className="h-[94px] w-[104px] object-contain desktop:h-[158px] desktop:w-[143px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

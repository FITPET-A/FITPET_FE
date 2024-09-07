import Image from "next/image";

export default function LandingSection2() {
  return (
    // [영역 2] 간단한 정보 입력만으로 부담없이
    <section className="mobile:pt-[100px] flex flex-col items-center pt-[286px] tablet:pt-[200px]">
      <p className="mobile:text-[24px] text-center font-paperlogy-heading text-[40px] text-primary-50 tablet:text-[30px]">
        간단한 정보 입력만으로 부담없이
      </p>
      <div className="mobile:mt-[30px] mt-[74px] flex max-w-[1080px] flex-wrap justify-center gap-10 tablet:mt-[50px] tablet:flex-nowrap">
        {/* STEP1 */}
        <div className="flex flex-col items-center rounded-[20px] bg-primary-00 tablet:h-[258px] tablet:w-[342px] desktop:h-[423px] desktop:w-[470px]">
          <p className="mobile:text-[18px] mt-[52px] rounded-lg bg-primary-50 px-10 py-2 text-center font-paperlogy-heading text-[24px] text-grayscale-00 tablet:text-[20px]">
            STEP 1
          </p>
          <p className="mobile:text-[18px] mt-6 font-paperlogy-title text-[24px] text-primary-50 tablet:text-[20px]">
            1분 간단 정보 입력하면
          </p>
          <div className="mt-6 flex w-full justify-end">
            <Image
              src="/assets/landing_step1.webp"
              alt="STEP1 icon"
              width={333}
              height={198}
              className="object-contain"
            />
          </div>
        </div>

        {/* STEP2 */}
        <div className="flex flex-col items-center rounded-[20px] bg-primary-00 tablet:h-[258px] tablet:w-[342px] desktop:h-[423px] desktop:w-[470px]">
          <p className="mobile:text-[18px] mt-[52px] rounded-lg bg-primary-50 px-10 py-2 text-center font-paperlogy-heading text-[24px] text-grayscale-00 tablet:text-[20px]">
            STEP 2
          </p>
          <p className="mobile:text-[18px] mt-6 font-paperlogy-title text-[24px] text-primary-50 tablet:text-[20px]">
            카톡으로 펫보험 비교 견적서가 쏙!
          </p>
          <div className="mt-11">
            <Image
              src="/assets/landing_step2.webp"
              alt="STEP2 icon"
              width={158}
              height={142}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

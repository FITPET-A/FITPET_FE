import Image from "next/image";

export default function LandingSection2() {
  return (
    // [영역 2] 간단한 정보 입력만으로 부담없이
    <section className="flex flex-col items-center pt-[286px]">
      <p className="text-center font-paperlogy-heading text-[40px] text-primary-50">
        간단한 정보 입력만으로 부담없이
      </p>
      <div className="mt-[74px] flex space-x-10">
        {/* STEP1 */}
        <div className="flex h-[423px] w-[470px] flex-col items-center rounded-[20px] bg-primary-00">
          <p className="mt-[52px] rounded-lg bg-primary-50 px-10 py-2 text-center font-paperlogy-heading text-[24px] text-grayscale-00">
            STEP 1
          </p>
          <p className="mt-6 font-paperlogy-title text-[24px] text-primary-50">
            1분 간단 정보 입력하면
          </p>
          <div className="mt-6 flex w-full justify-end">
            <Image
              src="/assets/landing_step1.webp"
              alt="STEP1 icon"
              width={333}
              height={198}
            />
          </div>
        </div>

        {/* STEP2 */}
        <div className="flex h-[423px] w-[470px] flex-col items-center rounded-[20px] bg-primary-00">
          <p className="mt-[52px] rounded-lg bg-primary-50 px-10 py-2 text-center font-paperlogy-heading text-[24px] text-grayscale-00">
            STEP 2
          </p>
          <p className="mt-6 font-paperlogy-title text-[24px] text-primary-50">
            카톡으로 펫보험 비교 견적서가 쏙!
          </p>
          <div className="mt-11">
            <Image
              src="/assets/landing_step2.webp"
              alt="STEP2 icon"
              width={158}
              height={142}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

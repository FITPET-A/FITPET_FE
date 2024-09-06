import Image from "next/image";

export default function LandingSection3() {
  return (
    <section className="mt-[284px] flex h-[529px] flex-col items-center bg-primary-40">
      <p className="mt-[105px] text-center font-paperlogy-heading text-[40px] text-grayscale-00">
        한눈에 비교하는 주요 보험사 견적
      </p>
      <div className="mt-[87px] flex justify-between space-x-8">
        {/* 5개 보험사 박스 */}
        <div className="flex h-[108px] w-[371px] items-center justify-center rounded-[20px] bg-grayscale-00">
          <Image
            src="/assets/insurance_petpermint_logo.webp"
            alt="펫퍼민트"
            width={253}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex h-[108px] w-[371px] items-center justify-center rounded-[20px] bg-grayscale-00">
          <Image
            src="/assets/insurance_kb_logo.webp"
            alt="KB손해보험"
            width={281}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex h-[108px] w-[371px] items-center justify-center rounded-[20px] bg-grayscale-00">
          <Image
            src="/assets/insurance_samsung_logo.webp"
            alt="삼성화재"
            width={154}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex h-[108px] w-[371px] items-center justify-center rounded-[20px] bg-grayscale-00">
          <Image
            src="/assets/insurance_db_logo.webp"
            alt="DB손해보험"
            width={253}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex h-[108px] w-[371px] items-center justify-center rounded-[20px] bg-grayscale-00">
          <Image
            src="/assets/insurance_hyundai_logo.webp"
            alt="현대해상"
            width={253}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

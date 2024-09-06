import Image from "next/image";

export default function LandingSection6() {
  return (
    // [영역 6] 전문가와의 1:1 카톡 상담 및 가입과 청구까지 걱정없이
    <section className="relative flex flex-col items-center bg-grayscale-100 pb-[355px] pt-[259px]">
      <div className="flex w-[1080px] flex-col space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-left text-grayscale-00">
            <p className="font-paperlogy-heading text-[40px]">
              전문가와의 1:1 카톡 상담
            </p>
            <p className="font-paperlogy-title text-[24px]">
              당신의 반려동물 보험을 돕습니다!
            </p>
          </div>
          <Image
            src="/assets/landing_counsel.webp"
            alt="Dog Helping Image"
            width={321.08}
            height={310}
            className="object-cover"
          />
        </div>
        <div className="mt-[142px] flex items-center justify-between">
          <Image
            src="/assets/landing_accession.webp"
            alt="Insurance Offer Image"
            width={341}
            height={339}
            className="object-cover"
          />
          <div className="text-right text-grayscale-00">
            <p className="font-paperlogy-heading text-[40px]">
              가입과 청구까지 걱정없이
            </p>
            <p className="font-paperlogy-title text-[24px]">
              복잡한 보험 가입과 보험금 청구도 한 번에 처리드려요.
            </p>
          </div>
        </div>
      </div>
      {/* 아래 컨텐츠 */}
      <p className="mt-[303px] text-center font-paperlogy-heading text-[40px] text-grayscale-00">
        막막한 펫보험, <br />
        이제는 안심하세요!
      </p>

      <div className="relative mt-[81px] flex space-x-10">
        <div className="flex h-[478px] w-[470px] flex-col items-center rounded-[20px] bg-grayscale-05">
          <p className="mt-[58px] text-center text-[24px] font-medium text-grayscale-70">
            정확하고 객관적인 정보만을 <br />
            안내드려요
          </p>
          <Image
            src="/assets/book.webp"
            alt="book image"
            width={135.79}
            height={167.51}
            className="mt-[51.65px]"
          />
        </div>

        <div className="z-10 flex h-[478px] w-[470px] flex-col items-center rounded-[20px] bg-grayscale-05">
          <p className="mt-[73px] text-center text-[24px] font-medium text-grayscale-70">
            불필요한 가입 강요 없어요
          </p>
          <Image
            src="/assets/good.webp"
            alt="good image"
            width={156.66}
            height={133.65}
            className="mt-[76.41px]"
          />
        </div>
        <Image
          src="/assets/DOG_glasses.webp"
          alt="Dog with Glasses"
          width={249}
          height={335.28}
          className="absolute -top-[253px] right-[37px] z-0"
        />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function LandingSection7() {
  return (
    // [영역 7] 리뷰 및 선물
    <section className="relative flex w-full flex-col items-center bg-grayscale-15">
      <Image
        src="/assets/DOG_smile.webp"
        alt="Review 1 Top DOG Image"
        width={248}
        height={250}
        className="absolute left-[437px] top-[175px] z-0"
      />
      <p className="pt-[202px] text-center font-paperlogy-heading text-[40px] text-grayscale-100">
        반려인들의 <br />
        실제 리뷰를 확인해보세요
      </p>
      <div className="mt-[72px] flex space-x-[24px]">
        {/* 리뷰 1 */}
        <div className="relative flex h-[268px] w-[328px] flex-col rounded-2xl bg-grayscale-00 px-6 py-5 font-paperlogy-title shadow-lg">
          <div className="z-10 flex flex-col items-start">
            <Image
              src="/assets/star_review.webp"
              alt="Star Review"
              width={120}
              height={24}
              className="mb-4"
            />
            <div>
              <p className="text-[24px] font-medium text-grayscale-100">
                김레오
              </p>
              <p className="text-sm text-grayscale-60">
                닥스훈트 (0살, 여자아이)
              </p>
            </div>
          </div>
          <div className="my-4 border-1 border-grayscale-10" />
          <p className="font-regular text-grayscale-80">
            펫보험 가입하고 5일만에 물림사고가 있었는데 상해라서 30일 기다리지
            않고 바로 보상받을 수 있더라고요. 보상신청도 대신 해주셔서 편했어요.
          </p>
        </div>

        {/* 리뷰 2 */}
        <div className="flex h-[268px] w-[328px] flex-col rounded-2xl bg-grayscale-00 px-6 py-5 font-paperlogy-title shadow-lg">
          <div className="flex flex-col items-start">
            <Image
              src="/assets/star_review.webp"
              alt="Star Review"
              width={120}
              height={24}
              className="mb-4"
            />
            <div>
              <p className="text-[24px] font-medium text-grayscale-100">
                박우유
              </p>
              <p className="text-sm text-grayscale-60">
                코리안숏헤어 (0살, 여자아이)
              </p>
            </div>
          </div>
          <div className="my-4 border-1 border-grayscale-10" />
          <p className="font-regular text-grayscale-80">
            펫보험은 계속 알아보고 있었는데... 보험사 하나하나 금액 확인하기
            어려웠는데 비교견적서를 보내주셔서 결정하기 쉬웠어요.
          </p>
        </div>

        {/* 리뷰 3 */}
        <div className="flex h-[268px] w-[328px] flex-col rounded-2xl bg-grayscale-00 px-6 py-5 font-paperlogy-title shadow-lg">
          <div className="flex flex-col items-start">
            <Image
              src="/assets/star_review.webp"
              alt="Star Review"
              width={120}
              height={24}
              className="mb-4"
            />
            <div>
              <p className="text-[24px] font-medium text-grayscale-100">
                이토리
              </p>
              <p className="text-sm text-grayscale-60">
                웰시코기 (4살, 남자아이)
              </p>
            </div>
          </div>
          <div className="my-4 border-1 border-grayscale-10" />
          <p className="font-regular text-grayscale-80">
            보험사마다 문의해봐도 가격도 차이나고, 보장 내용도 달라서 이해가 잘
            안 됐는데, 웰시코기한테 가장 합리적인 보험상품을 추천해줘서
            좋았어요.
          </p>
        </div>
      </div>

      <div className="mt-[214px] flex flex-col items-center">
        <Image
          src="/assets/gift.webp"
          alt="Gift Image"
          width={228}
          height={220}
          className="relative left-[calc(50%-560px)]"
        />
        <p className="mt-2 text-center font-paperlogy-heading text-[40px] text-grayscale-100">
          지금 가입하면 <br />
          우리아이를 위한 선물을 드려요!
        </p>
        <Image
          src="/assets/DOG_gift.webp"
          alt="Dog Gift Image"
          width={660}
          height={498}
          className="mb-[245px] mt-[120px]"
        />
      </div>
    </section>
  );
}

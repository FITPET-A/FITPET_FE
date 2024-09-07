import Image from "next/image";

export default function LandingSection5() {
  return (
    <section className="flex w-full flex-col items-center bg-grayscale-10 pb-[104px] pt-[167px] font-medium mobile:px-2 tablet:px-6 desktop:pb-[387px]">
      <p className="font-paperlogy-heading text-[24px] text-grayscale-100 desktop:text-[40px]">
        견적서 신청 전 알아두세요!
      </p>

      {/* 첫 번째 말풍선 */}
      <div className="mt-10 flex w-full justify-center px-2">
        <div className="relative flex w-[1080px] items-center justify-start">
          <Image
            src="/assets/person_mini_speech.webp"
            alt="info icon 1"
            width={128}
            height={128}
            className="absolute -left-[8px] h-[62px] w-[62px] desktop:h-[128px] desktop:w-[128px]"
          />
          <div className="relative ml-[72px] flex w-auto items-center rounded-[20px] bg-grayscale-05 px-5 py-4 desktop:ml-[144px] desktop:px-[36px] desktop:py-[30px]">
            <p className="font-medium text-grayscale-80 tablet:text-[18px] desktop:text-[24px]">
              견적서를 받으면 꼭 상품에 가입해야 하나요?
            </p>
            <div className="absolute left-[-8px] top-1/2 h-0 w-0 -translate-y-1/2 rotate-[45deg] transform rounded-lg border-l-[32px] border-t-[32px] border-l-grayscale-05 border-t-transparent text-grayscale-05">
              .
            </div>
          </div>
        </div>
      </div>

      {/* 두 번째 말풍선 */}
      <div className="mt-10 flex w-full justify-center px-2">
        <div className="relative flex w-[1080px] items-center justify-end">
          <div className="relative mr-[72px] flex w-auto items-center rounded-[20px] bg-primary-50 px-5 py-4 desktop:mr-[144px] desktop:px-[36px] desktop:py-[30px]">
            <p className="text-right font-medium text-grayscale-05 tablet:text-[18px] desktop:text-[24px]">
              아니에요. 편하게 견적만 받아보셔도 괜찮아요. <br />
              이후 궁금한 점이 생기면 언제든지 상담을 요청해주세요.
            </p>
            <div className="absolute right-[-8px] h-0 w-0 rotate-[-45deg] transform rounded-lg border-r-[32px] border-t-[32px] border-r-primary-50 border-t-transparent text-grayscale-05">
              .
            </div>
          </div>
          <Image
            src="/assets/DOG_mini_speech.webp"
            alt="info icon 2"
            width={128}
            height={128}
            className="absolute -right-[8px] h-[62px] w-[62px] desktop:h-[128px] desktop:w-[128px]"
          />
        </div>
      </div>

      {/* 세 번째 말풍선 */}
      <div className="mt-[110px] flex w-full justify-center px-2">
        <div className="relative flex w-[1080px] items-center justify-start">
          <Image
            src="/assets/person_mini_speech.webp"
            alt="info icon 3"
            width={128}
            height={128}
            className="absolute -left-[8px] h-[62px] w-[62px] desktop:h-[128px] desktop:w-[128px]"
          />
          <div className="relative ml-[72px] flex w-auto items-center rounded-[20px] bg-grayscale-05 px-5 py-4 desktop:ml-[144px] desktop:px-[36px] desktop:py-[30px]">
            <p className="font-medium text-grayscale-80 tablet:text-[18px] desktop:text-[24px]">
              견적서로 보험 상품을 비교한 후에도 결정이 어려우면 어쩌죠?
            </p>
            <div className="absolute left-[-10px] top-1/2 h-0 w-0 -translate-y-1/2 rotate-[45deg] transform rounded-lg border-l-[32px] border-t-[32px] border-l-grayscale-05 border-t-transparent text-grayscale-05">
              .
            </div>
          </div>
        </div>
      </div>

      {/* 네 번째 말풍선 */}
      <div className="mt-10 flex w-full justify-center px-2">
        <div className="relative flex w-[1080px] items-center justify-end">
          <div className="relative mr-[72px] flex w-auto items-center rounded-[20px] bg-primary-50 px-5 py-4 desktop:mr-[144px] desktop:px-[36px] desktop:py-[30px]">
            <p className="text-right font-medium text-grayscale-05 tablet:text-[18px] desktop:text-[24px]">
              카카오톡으로 1:1 상담을 요청하시면 스마트커버인슈어런스의 <br />
              펫보험 전문가들이 우리아이에게 가장 적합한 상품을 추천드려요.
            </p>
            <div className="absolute right-[-8px] h-0 w-0 rotate-[-45deg] transform rounded-lg border-r-[32px] border-t-[32px] border-r-primary-50 border-t-transparent text-grayscale-05">
              .
            </div>
          </div>
          <Image
            src="/assets/DOG_mini_speech.webp"
            alt="info icon 4"
            width={128}
            height={128}
            className="absolute -right-[8px] h-[62px] w-[62px] desktop:h-[128px] desktop:w-[128px]"
          />
        </div>
      </div>
    </section>
  );
}

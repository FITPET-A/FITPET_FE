import Image from "next/image";

export default function LandingSection5() {
  return (
    <section className="flex h-[1392px] flex-col items-center bg-grayscale-10 pt-[167px] font-medium">
      <p className="font-paperlogy-heading text-[40px] text-grayscale-100">
        견적서 신청 전 알아두세요!
      </p>

      {/* 첫 번째 말풍선 */}
      <div className="mt-[68px] flex w-full justify-center">
        <div className="flex w-[1080px] items-center justify-start">
          <Image
            src="/assets/person_mini_speech.webp"
            alt="info icon 1"
            width={128}
            height={128}
            className="mr-11"
          />
          <div className="flex w-auto items-center rounded-[20px] bg-grayscale-05 px-6 py-6">
            <p className="text-[24px] font-medium text-grayscale-80">
              견적서를 받으면 꼭 상품에 가입해야 하나요?
            </p>
          </div>
        </div>
      </div>

      {/* 두 번째 말풍선 */}
      <div className="mt-10 flex w-full justify-center">
        <div className="flex w-[1080px] items-center justify-end">
          <div className="flex w-auto items-center rounded-[20px] bg-primary-50 px-6 py-6">
            <p className="text-right text-[24px] font-medium text-grayscale-05">
              아니에요. 편하게 견적만 받아보셔도 괜찮아요. <br />
              이후 궁금한 점이 생기면 언제든지 상담을 요청해주세요.
            </p>
          </div>
          <Image
            src="/assets/DOG_mini_speech.webp"
            alt="info icon 2"
            width={128}
            height={128}
            className="ml-11"
          />
        </div>
      </div>

      {/* 세 번째 말풍선 */}
      <div className="mt-[110px] flex w-full justify-center">
        <div className="flex w-[1080px] items-center justify-start">
          <Image
            src="/assets/person_mini_speech.webp"
            alt="info icon 3"
            width={128}
            height={128}
            className="mr-11"
          />
          <div className="flex w-auto items-center rounded-[20px] bg-grayscale-05 px-6 py-6">
            <p className="text-[24px] font-medium text-grayscale-80">
              견적서로 보험 상품을 비교한 후에도 결정이 어려우면 어쩌죠?
            </p>
          </div>
        </div>
      </div>

      {/* 네 번째 말풍선 */}
      <div className="mt-10 flex w-full justify-center">
        <div className="flex w-[1080px] items-center justify-end">
          <div className="flex w-auto items-center rounded-[20px] bg-primary-50 px-6 py-6">
            <p className="text-right text-[24px] font-medium text-grayscale-05">
              카카오톡으로 1:1 상담을 요청하시면 스마트커버인슈어런스의 <br />
              펫보험 전문가들이 우리아이에게 가장 적합한 상품을 추천드러요.
            </p>
          </div>
          <Image
            src="/assets/DOG_mini_speech.webp"
            alt="info icon 4"
            width={128}
            height={128}
            className="ml-11"
          />
        </div>
      </div>
    </section>
  );
}

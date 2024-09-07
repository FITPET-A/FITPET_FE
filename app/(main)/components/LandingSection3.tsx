import React, { useEffect, useRef } from "react";
import Image from "next/image";

const insuranceCompanies = [
  {
    id: 1,
    name: "펫퍼민트",
    src: "/assets/insurance_petpermint_logo.webp",
    width: 253,
    height: 80,
  },
  {
    id: 2,
    name: "KB손해보험",
    src: "/assets/insurance_kb_logo.webp",
    width: 281,
    height: 80,
  },
  {
    id: 3,
    name: "삼성화재",
    src: "/assets/insurance_samsung_logo.webp",
    width: 154,
    height: 80,
  },
  {
    id: 4,
    name: "DB손해보험",
    src: "/assets/insurance_db_logo.webp",
    width: 253,
    height: 80,
  },
  {
    id: 5,
    name: "현대해상",
    src: "/assets/insurance_hyundai_logo.webp",
    width: 253,
    height: 80,
  },
];

export default function LandingSection3() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const animationDuration = 20;
      const totalWidth = scrollContainer.scrollWidth / 2;

      scrollContainer.style.animation = `scroll ${animationDuration}s linear infinite`;

      const keyframes = `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
      `;

      const styleElement = document.createElement("style");
      styleElement.textContent = keyframes;
      document.head.appendChild(styleElement);

      return () => {
        document.head.removeChild(styleElement);
      };
    }
    return undefined;
  }, []);

  return (
    <section className="mt-[284px] flex h-auto min-h-[529px] w-full flex-col items-center overflow-hidden bg-primary-40 py-[105px]">
      <p className="text-center font-paperlogy-heading text-[24px] text-grayscale-00 desktop:text-[40px]">
        한눈에 비교하는 주요 보험사 견적
      </p>
      <div className="mt-[87px] w-full overflow-hidden">
        <div ref={scrollRef} className="flex gap-8 whitespace-nowrap">
          {[...insuranceCompanies, ...insuranceCompanies].map(
            (company, index) => (
              <div
                key={`${company.id}-${company.name}-${index % insuranceCompanies.length}`}
                className="inline-flex h-[108px] w-[240px] shrink-0 items-center justify-center rounded-[20px] bg-grayscale-00 desktop:w-[371px]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={company.src}
                    alt={company.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

import React from "react";

function Footer() {
  return (
    <footer className="mt-8 flex justify-center bg-grayscale-100 text-md">
      <div className="flex w-[1080px] flex-col">
        {/* 이용약관 및 개인정보처리방침 */}
        <div className="gab-6 mt-8 flex">
          <div className="flex space-x-6 font-semibold text-grayscale-00">
            <p>이용약관</p>
            <p>개인정보처리방침</p>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="mt-6 flex flex-col gap-1 text-grayscale-40">
          <p>
            스마트커버 인슈어런스(주) | 사업자 등록번호: 704-86-02268 |
            서울특별시 강남구 테헤란로 107길 6 B1
          </p>
          <p>
            대표: 고정욱 | 준법심의필 제2024-07-0011호 (2024.07.26 ~ 2025.07.26)
            | 호스팅제공자: (주)아임웹
          </p>
          <p>
            보험대리점: 스마트커버 인슈어런스(주) 협회등록번호: 제203120029호
          </p>
        </div>

        {/* 연락처 */}
        <div className="mt-8 flex flex-col gap-2 text-grayscale-40">
          <p className="font-bold">Contact us</p>
          <p>010-5748-1800 (월-금: 9am-6pm) | contact@smartcoverins.co.kr</p>
        </div>

        {/* 필수 안내 사항 */}
        <div className="mb-16 mt-8 flex flex-col gap-2 text-grayscale-60">
          <p className="font-semibold">필수 안내 사항</p>
          <div>
            <p>
              보험대리점: 스마트커버 인슈어런스(주) 협회등록번호: 제203120029호
              본 광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터
              1년입니다.
            </p>
            <p>
              보험계약자가 기존 보험계약을 해지하고 새로운 보험 계약을 체결하는
              과정에서 1) 질병이력, 연령증가 등으로 가입이 거절되거나 보험료가
              인상될 수 있습니다. 2) 가입 상품에 따라 새로운 면책기간 적용 및
              보장 제한 등 기타 불이익이 발생할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

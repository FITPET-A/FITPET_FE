import React from "react";

function Footer() {
  return (
    <footer className="md bg-grayscale-100 py-10">
      <div className="container mx-auto mb-4 px-4">
        {/* 이용약관 및 개인정보처리방침 */}
        <div className="mb-6 flex flex-col justify-between">
          <p className="text-grayscale-00">
            이용약관&nbsp;&nbsp;&nbsp;개인정보처리방침
          </p>
        </div>

        {/* 회사 정보 */}
        <div className="mb-6 flex flex-col justify-between text-grayscale-40">
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
        <div className="mb-6 text-grayscale-40">
          <p>Contact us</p>
          <p className="mt-2">
            010-5748-1800 (월-금: 9am-6pm) | contact@smartcoverins.co.kr
          </p>
        </div>

        {/* 필수 안내 사항 */}
        <div className="mb-6 text-grayscale-60">
          <p>필수 안내 사항</p>
          <p className="mt-2">
            보험대리점: 스마트커버 인슈어런스(주) 협회등록번호: 제203120029호 본
            광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터
            1년입니다.
          </p>
          <p>
            보험계약자가 기존 보험계약을 해지하고 새로운 보험 계약을 체결하는
            과정에서 1) 질병이력, 연령증가 등으로 가입이 거절되거나 보험료가
            인상될 수 있습니다. 2) 가입 상품에 따라 새로운 면책기간 적용 및 보장
            제한 등 기타 불이익이 발생할 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

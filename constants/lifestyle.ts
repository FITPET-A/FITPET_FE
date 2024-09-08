// SC 홈페이지 반려생활 링크
const CONTENT_URLS: { [key: string]: string } = {
  "1": "https://www.fitpetmall.com/blog/%EC%88%98%EC%9D%98%EC%82%AC-%EC%B9%BC%EB%9F%BC-%EA%B0%95%EC%95%84%EC%A7%80-%EC%8B%A0%EC%9E%A5%EC%8B%AC%EC%9E%A5%EC%A6%9D%ED%9B%84%EA%B5%B0",
  "2": "https://www.fitpetmall.com/blog/%EC%88%98%EC%9D%98%EC%82%AC-%EC%B9%BC%EB%9F%BC-%EA%B0%95%EC%95%84%EC%A7%80-%EB%B0%B1%EB%82%B4%EC%9E%A5",
  "3": "https://www.fitpetmall.com/blog/%EC%88%98%EC%9D%98%EC%82%AC-%EC%B9%BC%EB%9F%BC-%EA%B3%A0%EC%96%91%EC%9D%B4-%EB%A7%8C%EC%84%B1-%EC%8B%A0%EC%9E%A5-%EC%A7%88%ED%99%98",
  "4": "https://www.fitpetmall.com/blog/cat-epidemic",
  "5": "https://www.fitpetmall.com/blog/dog-bloodystools",
  "6": "https://www.fitpetmall.com/blog/dog-cold",
};

// 항목별 내용
const LIFESTYLE_CONTENTS = [
  {
    key: "1",
    title: "강아지 심장, 신장 증후군 바로 알기",
    content:
      "아직까지 명확한 치료 가이드가 없는 심장, 신장 증후군.\n종류와 증상에 대해 구체적으로 알아봐요.",
    hashtags: ["#강아지", "#강아지 건강", "#수의사 칼럼"],
    imageSrc: "/assets/lifestyle1.webp",
  },
  {
    key: "2",
    title: "강아지 백내장의 모든 것",
    content:
      "고백내장을 빨리 발견하기 위해선 보호자의 관심이 필요해요.\n강아지 백내장의 종류와 단계, 치료법과 주의점을 알아봐요.",
    hashtags: ["#강아지", "#강아지 건강", "#수의사 칼럼"],
    imageSrc: "/assets/lifestyle2.webp",
  },
  {
    key: "3",
    title: "고양이 만성 신장 질환의 치료와 관리",
    content:
      "고양이는 특히 신장 질환에 취약한데요.\n치료 적기를 놓치기 쉬운 만성 신장 질환의 치료와 관리 방법 등을 알아봐요.",
    hashtags: ["#고양이", "#고양이 건강", "#수의사 칼럼"],
    imageSrc: "/assets/lifestyle3.webp",
  },
  {
    key: "4",
    title: "고양이 전염병 종류별 증상과 예방법",
    content:
      "사람처럼 고양이도 다양한 전염성 질병에 감염될 수 있습니다.\n고양이 전염병의 종류와 증상, 예방법을 알아봐요.",
    hashtags: ["#고양이", "#고양이 건강"],
    imageSrc: "/assets/lifestyle4.webp",
  },
  {
    key: "5",
    title: "강아지 혈변 대표적인 원인과 치료법",
    content:
      "장염, 스트레스 등으로 관찰되는 강아지 혈변.\n그 대표적인 원인과 치료법을 확인해봐요.",
    hashtags: ["#강아지", "#강아지 건강"],
    imageSrc: "/assets/lifestyle5.webp",
  },
  {
    key: "6",
    title: "강아지 감기 증상, 치료, 상태별 케어",
    content:
      "강아지가 감기에 걸리면 안쓰럽고 속상하죠.\n강아지 감기의 구체적인 원인과 증상, 치료법과 케어 방법을 알아봐요.",
    hashtags: ["#강아지", "#강아지 건강"],
    imageSrc: "/assets/lifestyle6.webp",
  },
];

export { CONTENT_URLS, LIFESTYLE_CONTENTS };

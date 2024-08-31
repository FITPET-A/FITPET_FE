import AnimalInfoFormBox from "./components/AnimalInfoFormBox";

export default function Home() {
  return (
    <div className="mt-[184px] flex flex-col px-7">
      <div className="font-paperlogy-heading text-[40px] text-white">
        3초만에 무료로 <br />펫 보험 견적서를 신청하세요!
      </div>
      <AnimalInfoFormBox />
    </div>
  );
}

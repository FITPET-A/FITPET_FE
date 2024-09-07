import React from "react";
import Landing from "./components/Landing";

export default function MainLayout() {
  return (
    <main className="desktop:custom-gradient-desktop custom-gradient-mobile tablet:custom-gradient-tablet flex min-h-[calc(100vh-440px)] flex-col items-center justify-center tablet:min-h-[calc(100vh-448px)]">
      {/* 폼박스 없앤 상태로 확인중 */}
      <div className="w-[1080px]">{}</div>
      <Landing />
    </main>
  );
}

// ({
//   children,
// }: {
//   children: React.ReactNode;
// })

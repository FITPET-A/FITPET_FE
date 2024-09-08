import React from "react";
import Landing from "./components/Landing";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="desktop:custom-gradient-desktop custom-gradient-mobile tablet:custom-gradient-tablet flex min-h-[calc(100vh-440px)] flex-col items-center tablet:min-h-[calc(100vh-448px)]">
      <div className="desktop:w-[1080px]">{children}</div>
      <Landing />
    </main>
  );
}

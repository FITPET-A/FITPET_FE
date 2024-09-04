import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="desktop:custom-gradient-desktop tablet:custom-gradient-tablet flex min-h-[calc(100vh-440px)] justify-center tablet:min-h-[calc(100vh-448px)]">
      <div className="w-[1080px]">{children}</div>
    </main>
  );
}

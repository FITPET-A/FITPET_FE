import React from "react";

export default function PartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="desktop:custom-gradient-desktop tablet:custom-gradient-tablet flex min-h-[calc(100vh-440px)] justify-center">
      <div className="w-[1080px]">{children}</div>
    </main>
  );
}

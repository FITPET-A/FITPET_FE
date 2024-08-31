import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="flex justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #008CFF 484px, transparent 484px)",
      }}
    >
      <div className="w-[1080px]">{children}</div>
    </main>
  );
}

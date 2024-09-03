import React from "react";
import FloatingButton from "./components/FloatingButton";

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
        minHeight: "calc(100vh - 448px)",
      }}
    >
      <div className="w-[1080px]">{children}</div>
      <FloatingButton />
    </main>
  );
}

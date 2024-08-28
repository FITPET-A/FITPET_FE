import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-[400px] justify-center bg-primary-50">
      <div className="w-[1080px]">{children}</div>
    </main>
  );
}

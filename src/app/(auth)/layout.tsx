import type { Metadata } from "next";
import { ReactNode } from "react";

//export const metadata: Metadata = {
//title: "Page Title",
//description: "Page description",
//};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex items-center justify-center">
      {children}
    </main>
  );
}

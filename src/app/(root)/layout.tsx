import StoreProvider from "@/providers/StoreProvider";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <StoreProvider />
      {children}
    </div>
  );
}

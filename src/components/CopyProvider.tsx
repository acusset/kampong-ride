"use client";

import { copy, type Copy } from "@/lib/copy";
import { createContext } from "react";

export const CopyContext = createContext<Copy>(copy);

export default function CopyProvider({ children }: { children: React.ReactNode }) {
  return <CopyContext.Provider value={copy}>{children}</CopyContext.Provider>;
}

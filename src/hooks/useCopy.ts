"use client";

import { CopyContext } from "@/components/CopyProvider";
import { useContext } from "react";

export function useCopy() {
  return useContext(CopyContext);
}

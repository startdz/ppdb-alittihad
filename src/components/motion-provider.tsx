"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Menghormati preferensi prefers-reduced-motion untuk seluruh animasi Motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

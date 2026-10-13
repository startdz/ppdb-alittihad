"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type CostBarProps = {
  items: { id: string; amount: number; color: string }[];
  className?: string;
};

/**
 * Grafik komposisi biaya. Dekoratif (aria-hidden): data lengkap ada di tabel di sebelahnya.
 * Segmen tumbuh sekali saat masuk viewport; animasi mati otomatis bila reduced motion aktif.
 */
export function CostBar({ items, className }: CostBarProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-10 w-full gap-0.5 overflow-hidden rounded-lg",
        className,
      )}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="h-full origin-left"
          style={{
            flexGrow: item.amount,
            flexBasis: 0,
            backgroundColor: item.color,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

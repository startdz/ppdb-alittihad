import Image from "next/image";

import { siteConfig } from "@/config/site";
import logoImage from "../../../public/assets/icon/LOGO.jpg";

/** Logo resmi dari /public/assets/icon/LOGO.jpg. Rasio aspek mengikuti file asli. */
export function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src={logoImage}
        alt={`Logo ${siteConfig.name}`}
        className="h-10 w-auto"
      />
      {showText ? (
        <span className="flex flex-col leading-tight whitespace-nowrap">
          <span className="font-heading text-lg font-bold">
            {siteConfig.name}
          </span>
          <span className="text-xs text-muted-foreground">
            SPMB {siteConfig.academicYear}
          </span>
        </span>
      ) : null}
    </span>
  );
}

import { ExternalLinkIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { getRegistrationUrl } from "@/config/site";
import { cn } from "@/lib/utils";

type RegisterButtonProps = {
  size?: "default" | "sm" | "lg";
  className?: string;
};

/**
 * Semua tombol "Daftar Sekarang" memakai komponen ini, sehingga URL Google Form
 * hanya dibaca dari src/config/site.ts. Selama URL masih placeholder, tombol nonaktif.
 */
export function RegisterButton({
  size = "default",
  className,
}: RegisterButtonProps) {
  const url = getRegistrationUrl();

  if (!url) {
    return (
      <Button variant="cta" size={size} disabled className={className}>
        Daftar Sekarang
      </Button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: "cta", size }), className)}
    >
      Daftar Sekarang
      <ExternalLinkIcon aria-hidden="true" />
      <span className="sr-only">(membuka formulir di tab baru)</span>
    </a>
  );
}

/** Catatan yang tampil hanya selama URL formulir belum diisi. */
export function RegistrationNotice({ className }: { className?: string }) {
  if (getRegistrationUrl()) return null;

  return (
    <p className={cn("text-sm", className)}>
      Formulir pendaftaran belum tersedia. Hubungi panitia untuk informasi lebih
      lanjut.
    </p>
  );
}

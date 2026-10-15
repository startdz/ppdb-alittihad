"use client";

import Image from "next/image";
import { type RefObject, useEffect, useRef, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BROCHURE_HREF, siteConfig } from "@/config/site";
import { brochures } from "@/data/images";

function BrochureCarousel({
  nextRef,
}: {
  nextRef: RefObject<HTMLButtonElement | null>;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} aria-label={`Brosur SPMB ${siteConfig.name}`}>
      <CarouselContent>
        {brochures.map((brochure, index) => (
          <CarouselItem
            key={brochure.id}
            aria-label={`Halaman ${index + 1} dari ${brochures.length}`}
            className="flex justify-center"
          >
            <Image
              src={brochure.image}
              alt={brochure.alt}
              sizes="(min-width: 640px) 560px, 90vw"
              quality={90}
              loading="eager"
              className="h-auto max-h-[calc(100dvh-17rem)] w-auto max-w-full rounded-lg border border-border"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex items-center justify-between gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <p aria-live="polite" className="text-base font-medium">
          Halaman {current + 1} dari {brochures.length}
        </p>
        <CarouselNext ref={nextRef} className="static translate-y-0" />
      </div>
      <p className="mt-3 text-center text-sm">
        <a
          href={brochures[current]?.image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4"
        >
          Buka halaman ini ukuran penuh
          <span className="sr-only"> (membuka di tab baru)</span>
        </a>
      </p>
    </Carousel>
  );
}

/**
 * Dialog brosur. Dibuka lewat link navigasi dengan href BROCHURE_HREF (#lihat-brosur),
 * baik dari header, menu mobile, footer, maupun tautan langsung ke URL ber-hash tersebut.
 */
export function BrochureDialog() {
  const [open, setOpen] = useState(false);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === BROCHURE_HREF);
    sync();
    window.addEventListener("hashchange", sync);

    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next && window.location.hash === BROCHURE_HREF) {
      // Hapus hash agar link yang sama bisa diklik lagi untuk membuka dialog.
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl" initialFocus={nextRef}>
        <DialogHeader>
          <DialogTitle>Brosur SPMB {siteConfig.name}</DialogTitle>
          <DialogDescription>
            Geser atau gunakan tombol panah untuk melihat halaman berikutnya.
          </DialogDescription>
        </DialogHeader>
        <BrochureCarousel nextRef={nextRef} />
      </DialogContent>
    </Dialog>
  );
}

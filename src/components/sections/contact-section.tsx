import { MapPinIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMapsUrl, getWhatsappUrl, siteConfig } from "@/config/site";

export function ContactSection() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <section
      id="kontak"
      aria-labelledby="judul-kontak"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionHeading
        id="judul-kontak"
        title="Kontak dan lokasi"
        description="Hubungi panitia untuk pertanyaan seputar pendaftaran."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{siteConfig.fullName}</CardTitle>
            <CardDescription>
              Nomor Statistik Madrasah: {siteConfig.nsm}
            </CardDescription>
          </CardHeader>
          <address className="flex flex-col gap-3 text-base not-italic">
            <span className="flex gap-3">
              <MapPinIcon
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              {siteConfig.address}
            </span>
            <span className="flex gap-3">
              <PhoneIcon
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              {siteConfig.phone.display}
            </span>
          </address>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hubungi panitia</CardTitle>
            <CardDescription>
              Pilih cara yang paling nyaman untuk Anda.
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={siteConfig.phone.href} className={buttonVariants()}>
              <PhoneIcon aria-hidden="true" />
              Telepon
            </a>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary" })}
              >
                <MessageCircleIcon aria-hidden="true" />
                WhatsApp
                <span className="sr-only">(membuka di tab baru)</span>
              </a>
            ) : null}
            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <MapPinIcon aria-hidden="true" />
              Buka di Google Maps
              <span className="sr-only">(membuka di tab baru)</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}

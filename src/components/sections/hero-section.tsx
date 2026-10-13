import Image from "next/image";

import {
  RegisterButton,
  RegistrationNotice,
} from "@/components/register-button";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { images } from "@/data/images";
import { registrationFee, schedule } from "@/data/ppdb";
import { formatRupiah } from "@/lib/format";

const facts = [
  { label: "Tahun pelajaran", value: siteConfig.academicYear },
  { label: "Pendaftaran", value: `${schedule.opens} ${schedule.closes}` },
  { label: "Biaya pendaftaran", value: formatRupiah(registrationFee) },
];

export function HeroSection() {
  const hero = images.hero;

  return (
    <section
      id="beranda"
      aria-labelledby="judul-beranda"
      className="border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
        <Reveal className="flex flex-col items-start gap-6">
          <Badge variant="secondary">
            SPMB tahun pelajaran {siteConfig.academicYear}
          </Badge>
          <h1
            id="judul-beranda"
            className="text-4xl leading-[1.1] font-extrabold sm:text-5xl lg:text-6xl"
          >
            Daftarkan putra-putri Anda di {siteConfig.name}
          </h1>
          <div className="max-w-xl space-y-3">
            <h1 className="text-base font-bold tracking-tight">
              Sekolah yang Mendampingi Tumbuh Kembang Anak Dalam Akademik,
              Ibadah, dan Al-Qur&apos;an.
            </h1>
            <p className="text-lg text-muted-foreground">
              Sistem Penerimaan Murid Baru (SPMB) {siteConfig.fullName} tahun
              pelajaran {siteConfig.academicYear} dibuka {schedule.opens}{" "}
              {schedule.closes}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <RegisterButton size="lg" />
            <a
              href="#alur"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Lihat alur pendaftaran
            </a>
          </div>
          <RegistrationNotice className="text-muted-foreground" />
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-auto w-full rounded-xl border border-border"
          />
        </Reveal>
      </div>
      <dl className="mx-auto grid max-w-6xl border-t border-border sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="px-4 py-5 sm:px-6 sm:not-first:border-l sm:not-first:border-border"
          >
            <dt className="text-sm text-muted-foreground">{fact.label}</dt>
            <dd className="mt-1 font-heading text-xl font-bold">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

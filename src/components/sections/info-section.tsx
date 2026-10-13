import {
  CalendarDaysIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { infoCards } from "@/data/ppdb";

const icons: Record<string, LucideIcon> = {
  jadwal: CalendarDaysIcon,
  seleksi: ClipboardCheckIcon,
  persyaratan: FileTextIcon,
};

export function InfoSection() {
  return (
    <section
      id="informasi"
      aria-labelledby="judul-informasi"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionHeading
        id="judul-informasi"
        title="Informasi pendaftaran"
        description="Hal-hal yang perlu diketahui orang tua sebelum mendaftar."
      />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {infoCards.map((card) => {
          const Icon = icons[card.id] ?? FileTextIcon;

          return (
            <li key={card.id}>
              <Card className="h-full">
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                {card.items.length > 0 ? (
                  <ul className="flex flex-col gap-2 text-base">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base text-muted-foreground">
                    {card.emptyNote}
                  </p>
                )}
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

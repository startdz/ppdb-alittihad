import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { flowSteps } from "@/data/ppdb";

export function FlowSection() {
  return (
    <section
      id="alur"
      aria-labelledby="judul-alur"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionHeading
        id="judul-alur"
        title="Alur pendaftaran"
        description="Enam langkah dari mengisi formulir sampai pengumuman penerimaan."
      />
      <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {flowSteps.map((step, index) => (
          <li key={step.id}>
            <Card className="h-full flex-row gap-4">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl leading-snug font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {step.description}
                </p>
                {step.details ? (
                  <ul className="mt-2 list-disc pl-5 text-base">
                    {step.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

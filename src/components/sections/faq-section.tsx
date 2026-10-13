import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/data/ppdb";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="judul-faq"
      className="border-y border-border bg-card"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <SectionHeading
          id="judul-faq"
          title="Pertanyaan yang sering diajukan"
          description="Jawaban berdasarkan data resmi SPMB. Pertanyaan lain? Hubungi panitia."
        />
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
                {faq.verified ? null : (
                  <Badge variant="outline" className="mt-3">
                    Menunggu konfirmasi sekolah
                  </Badge>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

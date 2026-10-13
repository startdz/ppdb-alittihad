import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FeesSection } from "@/components/sections/fees-section";
import { FlowSection } from "@/components/sections/flow-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoSection } from "@/components/sections/info-section";

export default function Home() {
  return (
    <main id="konten">
      <HeroSection />
      <InfoSection />
      <FeesSection />
      <FlowSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </main>
  );
}

import { CurrentYear } from "@/components/layout/current-year";
import { Logo } from "@/components/layout/logo";
import { getWhatsappUrl, navItems, siteConfig } from "@/config/site";

export function SiteFooter() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-base text-muted-foreground">
            {siteConfig.fullName}
            <br />
            Nomor Statistik Madrasah: {siteConfig.nsm}
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <h2 className="text-lg font-semibold">Navigasi</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base text-muted-foreground hover:text-foreground hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-lg font-semibold">Kontak</h2>
          <p className="text-muted-foreground">
            <a
              href="mailto:islamicschoolalittihad@gmail.com"
              className="hover:underline"
            >
              islamicschoolalittihad@gmail.com
            </a>
          </p>
          <address className="mt-3 flex flex-col gap-2 text-base text-muted-foreground not-italic">
            <span>{siteConfig.address}</span>
            <a
              href={siteConfig.phone.href}
              className="w-fit hover:text-foreground hover:underline"
            >
              Telepon {siteConfig.phone.display}
            </a>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit hover:text-foreground hover:underline"
              >
                WhatsApp Panitia
              </a>
            ) : null}
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-muted-foreground sm:px-6">
          © <CurrentYear /> {siteConfig.fullName}
        </p>
      </div>
    </footer>
  );
}

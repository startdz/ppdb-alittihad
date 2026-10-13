import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { RegisterButton } from "@/components/register-button";
import { navItems } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#beranda" aria-label="Ke bagian atas halaman">
          <Logo />
        </a>
        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <RegisterButton size="sm" className="hidden sm:inline-flex" />
          <div className="lg:hidden">
            <MobileNav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}

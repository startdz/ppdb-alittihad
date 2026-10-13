import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion-provider";
import { siteConfig } from "@/config/site";

import "./globals.css";

const display = localFont({
  src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});

const body = localFont({
  src: "./fonts/figtree-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "300 900",
  display: "swap",
});

const title = `SPMB ${siteConfig.name} Tahun Pelajaran ${siteConfig.academicYear}`;
const description = `Informasi SPMB ${siteConfig.fullName} tahun pelajaran ${siteConfig.academicYear}: jadwal pendaftaran, rincian biaya, dan alur pendaftaran.`;

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description,
  icons: { icon: "/assets/icon/LOGO.jpg" },
  openGraph: {
    title,
    description,
    siteName: siteConfig.fullName,
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f6a58",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-foreground"
        >
          Lewati ke konten utama
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}

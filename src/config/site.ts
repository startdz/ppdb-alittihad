import type { NavItem } from "@/types/ppdb";

/**
 * Nilai placeholder URL Google Form. Selama nilai ini belum diganti,
 * semua tombol "Daftar Sekarang" otomatis nonaktif dan menampilkan catatan.
 */
export const REGISTRATION_FORM_PLACEHOLDER =
  "TODO_REPLACE_WITH_OFFICIAL_GOOGLE_FORM_URL";

export const siteConfig = {
  name: "MI Al Ittihad",
  fullName: "Madrasah Ibtidaiyah Al Ittihad",
  academicYear: "2027/2028",
  nsm: "111232010563",
  /** Sumber: kop spreadsheet SPMB MI. */
  address:
    "Jl. Raya Warung Borong RT.03/02 Bojong Rangkas, Ciampea - Bogor 16620",
  phone: { display: "081230124224", href: "tel:081230124224" },

  /**
   * TODO: ISI NOMOR WHATSAPP RESMI (format internasional tanpa tanda +, mis. 628xxxxxxxxxx).
   * Nomor telepon di spreadsheet belum terverifikasi sebagai nomor WhatsApp,
   * jadi tombol WhatsApp baru muncul setelah nilai ini diisi.
   */
  whatsappNumber: null as string | null,

  /** SATU-SATUNYA tempat URL Google Form. Ganti nilai placeholder dengan URL resmi (https://...). */
  registrationFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSd25wmn6-2oU1S7HumfeyolPbC4QPFjmnCEvIxoWPDFoUnbow/viewform",
  // registrationFormUrl: REGISTRATION_FORM_PLACEHOLDER as string,
} as const;

export const navItems: NavItem[] = [
  { label: "Informasi", href: "#informasi" },
  { label: "Biaya", href: "#biaya" },
  { label: "Alur", href: "#alur" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

/** URL formulir yang valid, atau null bila masih placeholder / bukan https. */
export function getRegistrationUrl(): string | null {
  try {
    const url = new URL(siteConfig.registrationFormUrl);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function getWhatsappUrl(): string | null {
  if (!siteConfig.whatsappNumber) return null;
  const text = `Assalamualaikum, saya ingin bertanya tentang SPMB ${siteConfig.name} tahun pelajaran ${siteConfig.academicYear}.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getMapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.fullName}, ${siteConfig.address}`,
  )}`;
}

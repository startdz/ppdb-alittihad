import { siteConfig } from "@/config/site";
import type { FaqItem, FeeItem, FlowStep, InfoCard } from "@/types/ppdb";

/**
 * SUMBER DATA: spreadsheet "SPMB MI" milik Madrasah Ibtidaiyah Al Ittihad
 * (sheet biaya gid=359033593 dan sheet alur gid=1904423429).
 * Website ppdb.sditaddawah.sch.id hanya dipakai sebagai referensi struktur dan desain;
 * tidak ada datanya yang disalin ke sini.
 *
 * DATA YANG BELUM ADA (cari "TODO" di file ini dan di src/config/site.ts):
 * - TODO: daftar persyaratan dan dokumen pendaftaran
 * - TODO: informasi potongan harga (ada tab "Potongan Harga" di spreadsheet, belum dibagikan)
 * - TODO: visi dan misi, program unggulan, fasilitas
 * - TODO: nomor WhatsApp resmi dan URL Google Form (di src/config/site.ts)
 * - TODO: jadwal rinci (spreadsheet hanya menyebut bulan dibuka dan batas kuota)
 */

export const schedule = {
  opens: "Oktober 2026",
  closes: "sampai kuota terpenuhi",
} as const;

/** Urutan dan nominal sama dengan sheet "Rincian Biaya". */
export const fees: FeeItem[] = [
  {
    id: "pendaftaran",
    label: "Pendaftaran",
    amount: 330_000,
    color: "#f2b43a",
  },
  { id: "mpls", label: "MPLS", amount: 150_000, color: "#f7d58a" },
  { id: "observasi", label: "Observasi", amount: 250_000, color: "#9ad1c3" },
  { id: "seragam", label: "Seragam", amount: 1_500_000, color: "#5db3a0" },
  { id: "bangunan", label: "Bangunan", amount: 3_500_000, color: "#0f6a58" },
  { id: "fasilitas", label: "Fasilitas", amount: 1_000_000, color: "#3f8f9c" },
  { id: "spp-juli", label: "SPP Juli", amount: 450_000, color: "#12302b" },
];

/** Jumlah di sheet: Rp 7.000.000. Dihitung dari komponen agar selalu konsisten. */
export const feeTotal = fees.reduce((sum, fee) => sum + fee.amount, 0);

export const registrationFee = fees[0].amount;

/**
 * Urutan langkah 1-3 jelas dari sheet. Urutan langkah 4-6 DISIMPULKAN dari tata letak
 * sheet (baris kedua mengalir dari kanan ke kiri). Konfirmasikan ke sekolah.
 */
export const flowSteps: FlowStep[] = [
  {
    id: "formulir",
    title: "Lengkapi formulir pendaftaran",
    description: "Isi formulir pendaftaran secara online atau offline.",
  },
  {
    id: "bayar",
    title: "Bayar biaya pendaftaran",
    description: "Lakukan pembayaran biaya pendaftaran sebesar Rp 330.000.",
  },
  {
    id: "konfirmasi",
    title: "Konfirmasi biaya pendaftaran",
    description: "Konfirmasikan pembayaran biaya pendaftaran Anda ke panitia.",
  },
  {
    id: "administrasi",
    title: "Panitia menghubungi Anda",
    description:
      "Panitia menghubungi terkait kelengkapan administrasi dan keperluan lainnya.",
  },
  {
    id: "seleksi",
    title: "Ikuti seleksi masuk",
    description: "Seleksi masuk terdiri dari dua kegiatan:",
    details: ["Observasi murid", "Wawancara orang tua"],
  },
  {
    id: "pengumuman",
    title: "Pengumuman penerimaan",
    description: `Pengumuman penerimaan murid baru ${siteConfig.academicYear}.`,
  },
];

export const infoCards: InfoCard[] = [
  {
    id: "jadwal",
    title: "Jadwal pendaftaran",
    items: [`Dibuka ${schedule.opens}`, `Ditutup ${schedule.closes}`],
    emptyNote: "",
  },
  {
    id: "seleksi",
    title: "Seleksi masuk",
    items: ["Observasi murid", "Wawancara orang tua"],
    emptyNote: "",
  },
  {
    id: "persyaratan",
    title: "Persyaratan dan dokumen",
    // TODO: ISI DAFTAR PERSYARATAN DAN DOKUMEN RESMI MI AL ITTIHAD
    items: [],
    emptyNote:
      "Daftar persyaratan dan dokumen belum dicantumkan. Hubungi panitia untuk informasi terbaru.",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "kapan-dibuka",
    question: "Kapan pendaftaran dibuka?",
    answer: `Pendaftaran dibuka ${schedule.opens} dan berlangsung ${schedule.closes}.`,
    verified: true,
  },
  {
    id: "biaya-pendaftaran",
    question: "Berapa biaya pendaftaran?",
    answer:
      "Biaya pendaftaran Rp 330.000. Rincian biaya lainnya ada di bagian Biaya.",
    verified: true,
  },
  {
    id: "cara-daftar",
    question: "Bagaimana cara mendaftar?",
    answer:
      "Lengkapi formulir pendaftaran online atau offline, bayar biaya pendaftaran, lalu konfirmasi ke panitia. Langkah lengkapnya ada di bagian Alur.",
    verified: true,
  },
  {
    id: "seleksi",
    question: "Seleksi apa yang harus diikuti calon murid?",
    answer:
      "Seleksi masuk terdiri dari observasi murid dan wawancara orang tua.",
    verified: true,
  },
  {
    id: "dokumen",
    question: "Dokumen apa yang perlu disiapkan?",
    // TODO: GANTI DENGAN DAFTAR DOKUMEN RESMI, lalu ubah verified menjadi true.
    answer:
      "Daftar dokumen belum dicantumkan di sumber resmi yang kami terima. Silakan hubungi panitia melalui nomor telepon di bagian Kontak.",
    verified: false,
  },
];

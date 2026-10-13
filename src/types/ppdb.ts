export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type FeeItem = {
  id: string;
  label: string;
  /** Nominal dalam rupiah. */
  amount: number;
  /** Warna segmen pada grafik komposisi biaya. */
  color: string;
};

export type FlowStep = {
  id: string;
  title: string;
  description: string;
  /** Rincian bernomor di bawah deskripsi, bila ada. */
  details?: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  /** false = belum ada di sumber resmi; tampil dengan penanda "menunggu konfirmasi". */
  verified: boolean;
};

export type InfoCard = {
  id: string;
  title: string;
  /** Poin-poin isi kartu. Kosong = tampilkan catatan "informasi belum tersedia". */
  items: string[];
  emptyNote: string;
};

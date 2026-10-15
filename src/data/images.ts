/**
 * Semua gambar halaman ada di sini. Untuk mengganti placeholder dengan foto asli:
 * 1) taruh file di /public/assets/images/, 2) ubah `src` menjadi "/assets/images/nama-file.jpg",
 * 3) ubah `isPlaceholder` menjadi false dan perbarui `alt`.
 */
import type { StaticImageData } from "next/image";

import brosur1 from "../../public/assets/images/BROSUR_1.jpg";
import brosur2 from "../../public/assets/images/BROSUR_2.jpg";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPlaceholder: boolean;
};

export const images = {
  hero: {
    src: "/assets/images/Sunny Orange-and-Cream Campus Courtyard.png",
    // src: "https://placehold.co/960x720/dcebe6/0f6a58/png?text=Foto+madrasah",
    alt: "Gambar sementara: foto kegiatan belajar di madrasah akan dipasang di sini",
    width: 960,
    height: 720,
    isPlaceholder: true,
  },
} satisfies Record<string, SiteImage>;

/**
 * Halaman brosur untuk dialog "Lihat Brosur". Diimpor statis dari /public/assets/images/
 * agar ukuran asli terbaca dan rasio aspek terjaga. Tambah halaman baru dengan
 * menaruh file di folder tersebut dan menambah satu entri di bawah.
 */
export const brochures: { id: string; image: StaticImageData; alt: string }[] =
  [
    {
      id: "brosur-1",
      image: brosur1,
      alt: "Brosur SPMB MI Al Ittihad, halaman 1 dari 2",
    },
    {
      id: "brosur-2",
      image: brosur2,
      alt: "Brosur SPMB MI Al Ittihad, halaman 2 dari 2",
    },
  ];

/**
 * Semua gambar halaman ada di sini. Untuk mengganti placeholder dengan foto asli:
 * 1) taruh file di /public/assets/images/, 2) ubah `src` menjadi "/assets/images/nama-file.jpg",
 * 3) ubah `isPlaceholder` menjadi false dan perbarui `alt`.
 */
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

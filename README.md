# Website SPMB MI Al Ittihad (Tahun Pelajaran 2027/2028)

Landing page statis: Next.js 16 (App Router) + TypeScript strict + Tailwind CSS v4 + Biome + shadcn/ui (Base UI) + Motion.
Tanpa backend, database, maupun login. Pendaftaran lewat Google Form.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # Biome (format + lint)
npm run typecheck  # TypeScript
npm run build      # build produksi
```

Syarat: file logo ada di `public/assets/icon/LOGO.jpg` (diimpor statis, build gagal bila tidak ada).

## Yang harus Anda isi (cari kata `TODO`)

| Apa | Di mana |
| --- | --- |
| URL Google Form resmi | `src/config/site.ts` → `registrationFormUrl` (selama placeholder, semua tombol Daftar Sekarang nonaktif) |
| Nomor WhatsApp resmi | `src/config/site.ts` → `whatsappNumber` (format `628xxxxxxxxxx`; tombol muncul otomatis) |
| Persyaratan dan dokumen | `src/data/ppdb.ts` → `infoCards` (id `persyaratan`) dan FAQ `dokumen` |
| Informasi potongan harga | belum ada di data (tab "Potongan Harga" di spreadsheet) |
| Visi, misi, program, fasilitas | belum ada di data; tambahkan section bila sudah tersedia |
| Foto asli | `src/data/images.ts` (placeholder placehold.co → ganti ke `/assets/images/...`) |

## Struktur

- `src/config/site.ts`: identitas, kontak, URL Google Form, navigasi.
- `src/data/ppdb.ts`: biaya, alur, FAQ, kartu informasi (sumber: spreadsheet SPMB MI).
- `src/components/sections/*`: tiap section halaman. `src/components/ui/*`: komponen shadcn/ui berbasis Base UI.
- Font di-host sendiri (`src/app/fonts`, lisensi OFL disertakan).

## Catatan komponen shadcn/ui

Komponen di `src/components/ui` (button, badge, card, accordion, sheet) ditulis mengikuti pola shadcn/ui Base UI
karena registry `ui.shadcn.com` tidak bisa diakses saat pembuatan. Untuk memakai versi resmi, jalankan di lokal
(cadangkan dulu, lalu periksa hasil diff, terutama varian `cta` pada Button):

```bash
npx shadcn@latest add button badge card accordion sheet --overwrite
```

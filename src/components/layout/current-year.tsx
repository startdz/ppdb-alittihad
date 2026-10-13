import { cacheLife } from "next/cache";

/** Tahun berjalan; di-cache harian agar kompatibel dengan cacheComponents. */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");

  return <>{new Date().getFullYear()}</>;
}

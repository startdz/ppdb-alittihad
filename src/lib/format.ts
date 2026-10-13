const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

/** Contoh: 330000 -> "Rp 330.000" */
export function formatRupiah(amount: number) {
  return rupiah.format(amount).replace(/\s/g, " ");
}

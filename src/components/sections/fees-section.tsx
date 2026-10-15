import { CostBar } from "@/components/sections/cost-bar";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";
import { fees, feeTotal } from "@/data/ppdb";
import { formatRupiah } from "@/lib/format";

export function FeesSection() {
  const largest = fees.reduce((max, fee) =>
    fee.amount > max.amount ? fee : max,
  );
  const largestShare = Math.round((largest.amount / feeTotal) * 100);

  return (
    <section
      id="biaya"
      aria-labelledby="judul-biaya"
      className="border-y border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          id="judul-biaya"
          title="Rincian biaya"
          description={`Rincian biaya SPMB ${siteConfig.fullName} tahun pelajaran ${siteConfig.academicYear}. Biaya pendaftaran dibayar pada langkah kedua alur pendaftaran.`}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-base text-muted-foreground">
              Jumlah rincian biaya
            </p>
            <p className="font-heading text-5xl font-extrabold">
              {formatRupiah(feeTotal)}
            </p>
            <CostBar items={fees} className="mt-6" />
            <p className="mt-3 text-sm text-muted-foreground">
              Panjang tiap warna menunjukkan porsi komponen terhadap jumlah.
              {/* {" "}
              {largest.label} adalah komponen terbesar ({largestShare}% dari
              jumlah). */}
            </p>
          </div>
          <table className="w-full text-base">
            <caption className="sr-only">
              Rincian biaya SPMB tahun pelajaran {siteConfig.academicYear}
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="pb-3 text-left text-sm font-medium text-muted-foreground"
                >
                  Komponen
                </th>
                <th
                  scope="col"
                  className="pb-3 text-right text-sm font-medium text-muted-foreground"
                >
                  Nominal
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.id} className="border-t border-border">
                  <th scope="row" className="py-3 text-left font-medium">
                    <span className="inline-flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="size-3 rounded-sm"
                        style={{ backgroundColor: fee.color }}
                      />
                      {fee.label}
                    </span>
                  </th>
                  <td className="py-3 text-right tabular-nums">
                    {formatRupiah(fee.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-foreground">
                <th scope="row" className="py-4 text-left text-lg font-bold">
                  Jumlah
                </th>
                <td className="py-4 text-right text-lg font-bold tabular-nums">
                  {formatRupiah(feeTotal)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

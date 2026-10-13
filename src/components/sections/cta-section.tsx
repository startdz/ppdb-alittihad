import {
  RegisterButton,
  RegistrationNotice,
} from "@/components/register-button";
import { schedule } from "@/data/ppdb";

export function CtaSection() {
  return (
    <section
      id="daftar"
      aria-labelledby="judul-daftar"
      className="bg-primary text-primary-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 id="judul-daftar" className="text-3xl font-bold sm:text-4xl">
            Siap mendaftarkan putra-putri Anda?
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/85">
            Pendaftaran dibuka {schedule.opens} {schedule.closes}.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <RegisterButton size="lg" />
          <RegistrationNotice className="text-primary-foreground/85" />
        </div>
      </div>
    </section>
  );
}

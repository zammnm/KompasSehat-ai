import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-12 text-center text-white shadow-2xl lg:p-20">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            SIAP MEMULAI?
          </p>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Konsultasikan Gejala Anda
            <br />
            Bersama KompasSehat AI
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Dapatkan analisis awal mengenai gejala yang Anda alami serta
            rekomendasi layanan kesehatan yang sesuai hanya dalam hitungan
            detik.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link href="/chat">
              <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
                Mulai Konsultasi AI
              </button>
            </Link>

            <a href="#about">
              <button className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20">
                Pelajari Lebih Lanjut
              </button>
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}
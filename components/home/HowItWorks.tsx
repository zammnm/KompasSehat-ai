const steps = [
  {
    number: "01",
    title: "Jelaskan Gejala Anda",
    description:
      "Ceritakan gejala yang Anda alami menggunakan bahasa sehari-hari. Anda tidak perlu memahami istilah medis.",
  },
  {
    number: "02",
    title: "Analisis oleh AI",
    description:
      "KompasSehat AI menganalisis gejala yang Anda masukkan, memperkirakan tingkat urgensi, serta menentukan layanan kesehatan yang sesuai.",
  },
  {
    number: "03",
    title: "Terima Rekomendasi",
    description:
      "Dapatkan rekomendasi fasilitas kesehatan beserta saran penanganan awal berdasarkan hasil analisis AI.",
  },
  {
    number: "04",
    title: "Segera Ambil Tindakan",
    description:
      "Buka lokasi rumah sakit atau klinik terdekat melalui Google Maps dan segera dapatkan penanganan apabila diperlukan.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Cara Kerja
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Empat Langkah Menuju Penanganan yang Tepat
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            KompasSehat AI membantu Anda memahami kondisi kesehatan,
            menentukan tingkat urgensi, serta menemukan layanan kesehatan
            yang sesuai hanya dalam beberapa langkah sederhana.
          </p>

        </div>

        <div className="relative mt-16">

          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#2563EB] via-purple-500 to-purple-300 lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 1 ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/5 ${
                      index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                    }`}
                  >
                    <span className="text-sm font-bold gradient-text">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gradient-accent text-lg font-bold text-white shadow-lg shadow-blue-500/25 lg:mx-0">
                  {step.number}
                </div>

                <div className="hidden flex-1 lg:block" />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
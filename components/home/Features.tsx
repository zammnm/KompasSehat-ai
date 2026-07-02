const features = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    title: "Analisis Gejala AI",
    description:
      "Jelaskan gejala yang Anda alami menggunakan bahasa sehari-hari, kemudian AI akan membantu memberikan analisis awal.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    title: "Pencarian Fasilitas Kesehatan",
    description:
      "Temukan rumah sakit, klinik, atau apotek terdekat berdasarkan lokasi Anda secara cepat.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.364-.13 59.016 59.016 0 00-2.121-.082 47.636 47.636 0 00-2.121.082 48.424 48.424 0 00-1.364.13c-1.131.094-1.976 1.057-1.976 2.192V18.75A2.25 2.25 0 0018 21h-2.25z"
        />
      </svg>
    ),
    title: "Rekomendasi Layanan",
    description:
      "Dapatkan rekomendasi layanan kesehatan yang sesuai berdasarkan gejala, lokasi, dan hasil analisis AI.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Layanan 24 Jam",
    description:
      "HealthRoute AI siap membantu memberikan informasi kesehatan awal kapan saja saat Anda membutuhkannya.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Privasi Terjamin",
    description:
      "Data kesehatan Anda diproses secara aman dan tetap terlindungi sehingga privasi selalu terjaga.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Penilaian Tingkat Risiko",
    description:
      "AI membantu memperkirakan tingkat urgensi kondisi Anda sehingga Anda mengetahui langkah yang perlu segera dilakukan.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Fitur
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Semua yang Anda Butuhkan dalam Satu Platform
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            HealthRoute AI membantu Anda memahami gejala, menentukan tingkat
            urgensi, serta menemukan layanan kesehatan yang sesuai secara cepat
            dan mudah.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors duration-300 group-hover:gradient-accent group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/20">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const Rekomendasi = [
  {
    name: "RSUD Kota",
    type: "Rumah Sakit • IGD 24 Jam",
    distance: "1,2 km",
    rating: 4.8,
    waitTime: "~15 menit",
    available: true,
    specialty: "Dokter Umum",
  },
  {
    name: "Klinik Sehat Sentosa",
    type: "Klinik • Rawat Jalan",
    distance: "850 m",
    rating: 4.7,
    waitTime: "~20 menit",
    available: true,
    specialty: "Penyakit Dalam",
  },
  {
    name: "Apotek Keluarga",
    type: "Apotek • Buka 24 Jam",
    distance: "500 m",
    rating: 4.6,
    waitTime: "Buka Sekarang",
    available: true,
    specialty: "Obat & Vitamin",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <svg
        className="h-3.5 w-3.5 text-amber-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>

      <span className="text-xs font-medium text-slate-600">
        {rating}
      </span>
    </div>
  );
}

export default function RekomendasiPreview() {
  return (
    <section className="bg-slate-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Kartu Rumah Sakit */}

          <div className="order-2 lg:order-1">

            <div className="relative">

              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-blue-600/5 blur-2xl" />

              <div className="relative space-y-4">

                {Rekomendasi.map((rec, index) => (
                  <div
                    key={rec.name}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">

                      <div className="flex gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">

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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>

                        </div>

                        <div>

                          <h3 className="font-semibold text-slate-900">
                            {rec.name}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {rec.type}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-3">

                            <StarRating rating={rec.rating} />

                            <span className="text-xs text-slate-400">
                              •
                            </span>

                            <span className="text-xs text-slate-600">
                              {rec.distance}
                            </span>

                            <span className="text-xs text-slate-400">
                              •
                            </span>

                            <span className="text-xs font-medium text-green-600">
                              {rec.waitTime}
                            </span>

                          </div>

                        </div>

                      </div>

                      {rec.available && (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          Tersedia
                        </span>
                      )}

                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-4">

                      <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {rec.specialty}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Penjelasan */}

          <div className="order-1 lg:order-2">

            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Rekomendasi AI
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Temukan fasilitas kesehatan yang paling sesuai
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KompasSehat AI membantu menemukan rumah sakit,
              klinik, maupun apotek terdekat berdasarkan gejala,
              tingkat urgensi, serta lokasi Anda secara otomatis.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              {[
                {
                  label: "Fasilitas Terdaftar",
                  value: "1.200+",
                },
                {
                  label: "Akurasi AI",
                  value: "96%",
                },
                {
                  label: "Kota Terjangkau",
                  value: "45+",
                },
                {
                  label: "Respon AI",
                  value: "< 2 detik",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
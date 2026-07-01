const recommendations = [
  {
    name: "City General Hospital",
    type: "Hospital · Emergency Care",
    distance: "1.2 km",
    rating: 4.8,
    waitTime: "~15 min",
    available: true,
    specialty: "General Medicine",
  },
  {
    name: "MedCare Clinic",
    type: "Clinic · Primary Care",
    distance: "0.8 km",
    rating: 4.6,
    waitTime: "~30 min",
    available: true,
    specialty: "Internal Medicine",
  },
  {
    name: "HealthPlus Pharmacy",
    type: "Pharmacy · OTC & Prescriptions",
    distance: "0.5 km",
    rating: 4.5,
    waitTime: "Open now",
    available: true,
    specialty: "Pharmacy",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <svg className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-xs font-medium text-slate-600">{rating}</span>
    </div>
  );
}

export default function RecommendationPreview() {
  return (
    <section className="bg-slate-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-blue-600/5 blur-2xl" />

              <div className="relative space-y-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={rec.name}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-500/5"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-[#2563EB]">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{rec.name}</h3>
                          <p className="mt-0.5 text-sm text-slate-500">{rec.type}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-3">
                            <StarRating rating={rec.rating} />
                            <span className="text-xs text-slate-400">·</span>
                            <span className="text-xs text-slate-500">{rec.distance}</span>
                            <span className="text-xs text-slate-400">·</span>
                            <span className="text-xs font-medium text-emerald-600">{rec.waitTime}</span>
                          </div>
                        </div>
                      </div>
                      {rec.available && (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                          Available
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="rounded-lg bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                        {rec.specialty}
                      </span>
                      <button className="rounded-lg px-4 py-1.5 text-xs font-semibold text-[#2563EB] transition-colors hover:bg-blue-50">
                        View details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              Recommendations
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Personalized facility matching
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Based on your symptoms and location, HealthRoute AI instantly
              surfaces the best nearby healthcare options — ranked by relevance,
              availability, and quality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Facilities indexed", value: "1,200+" },
                { label: "Avg. match accuracy", value: "96%" },
                { label: "Cities covered", value: "45+" },
                { label: "Response time", value: "<2s" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

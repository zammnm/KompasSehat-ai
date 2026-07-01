export default function EmergencyBanner() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-red-200/60 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 p-8 shadow-sm lg:p-10">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-100/50 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-orange-100/50 blur-2xl" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-900">
                Medical Emergency?
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-red-800/80 lg:text-base">
                If you are experiencing a life-threatening emergency, do not use
                this app. Call your local emergency number immediately or go to
                the nearest emergency room.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/25 transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
                Call Emergency (119)
              </button>
              <button className="rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-red-700 transition-all duration-300 hover:bg-red-50">
                Find Nearest ER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

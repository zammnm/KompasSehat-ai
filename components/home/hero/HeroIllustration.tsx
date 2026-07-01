import GlassCard from "@/components/ui/GlassCard";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow */}
      <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-400/10 blur-3xl" />

      {/* Floating Badge */}
      <div className="absolute -top-6 right-4 z-20 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-slate-700">
            AI Online
          </span>
        </div>
      </div>

      <GlassCard className="relative p-7">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-xl text-white">
              🤖
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                HealthRoute AI
              </p>

              <p className="text-sm text-slate-500">
                Smart Healthcare Assistant
              </p>
            </div>
          </div>

          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Online
          </div>
        </div>

        <div className="my-6 h-px bg-slate-100" />

        {/* User */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-3xl rounded-br-lg bg-blue-600 px-5 py-3 text-sm text-white">
            I have had a fever for 3 days.
          </div>
        </div>

        {/* AI */}
        <div className="mt-5 flex gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-bold text-white">
            AI
          </div>

          <div className="rounded-3xl rounded-tl-lg bg-slate-100 px-5 py-4">
            <p className="text-sm text-slate-600">
              Analyzing your symptoms...
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="grid grid-cols-3 gap-5">
            <div>
              <p className="text-xs uppercase text-slate-400">
                Urgency
              </p>
              <p className="mt-2 font-semibold text-amber-600">
                Medium
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-400">
                Recommendation
              </p>
              <p className="mt-2 font-semibold">
                General Doctor
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-400">
                Distance
              </p>
              <p className="mt-2 font-semibold">
                2.1 KM
              </p>
            </div>
          </div>

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white">
            Open Maps 🚀
          </button>
        </div>
      </GlassCard>

      {/* Accuracy Badge */}
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-lg lg:block">
        <p className="text-xs text-slate-500">
          AI Accuracy
        </p>

        <p className="mt-1 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-lg font-bold text-transparent">
          98.2%
        </p>
      </div>
    </div>
  );
}
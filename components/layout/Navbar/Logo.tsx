export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl text-white shadow-lg">
        🩺
      </div>

      <div>
        <h3 className="font-bold text-slate-900">
          KompasSehat AI
        </h3>

        <p className="text-xs text-slate-500">
          Asisten Navigasi Layanan Kesehatan
        </p>
      </div>
    </div>
  );
}
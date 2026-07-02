import SymptomCard from "./SymptomCard";
import { symptoms } from "@/data/symptoms";

export default function WelcomeDashboard() {
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center overflow-y-auto px-4 py-4 sm:px-6 lg:px-8">

      <div className="mb-6 text-center">

        <p className="mb-2 text-sm font-semibold text-blue-600">
          Selamat Datang di KompasSehat AI
        </p>

        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
          Apa keluhan kesehatan Anda hari ini?
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Pilih salah satu gejala umum di bawah ini atau ketik sendiri
          keluhan kesehatan yang sedang Anda alami.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {symptoms.map((symptom) => (
          <SymptomCard
            key={symptom.id}
            symptom={symptom}
          />
        ))}

      </div>

    </div>
  );
}
import SymptomCard from "./SymptomCard";
import { symptoms } from "@/data/symptoms";

export default function WelcomeDashboard() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">

      <div className="mb-10 text-center">

        <p className="mb-3 font-semibold text-blue-600">
          Selamat Datang di KompasSehat AI
        </p>

        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
          Apa keluhan kesehatan Anda hari ini?
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Pilih salah satu gejala umum di bawah ini atau ketik sendiri keluhan kesehatan yang sedang Anda alami.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

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
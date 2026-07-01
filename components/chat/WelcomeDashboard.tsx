import SymptomCard from "./SymptomCard";
import { symptoms } from "@/data/symptoms";

export default function WelcomeDashboard() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-8">

      <div className="mb-12 text-center">

        <p className="mb-3 text-blue-600 font-semibold">
          Welcome to HealthRoute AI
        </p>

        <h1 className="text-5xl font-bold text-slate-900">
          How are you feeling today?
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
          Choose one of the common symptoms below or type your own health concern.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">

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
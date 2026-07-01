import { Thermometer } from "lucide-react";
import { Symptom } from "@/data/symptoms";

interface SymptomCardProps {
  symptom: Symptom;
}

export default function SymptomCard({
  symptom,
}: SymptomCardProps) {
  return (
    <button className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <Thermometer size={24} />
      </div>

      <h3 className="font-semibold text-slate-900">
        {symptom.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {symptom.description}
      </p>

      <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        {symptom.category}
      </span>

    </button>
  );
}
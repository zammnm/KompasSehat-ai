import { Thermometer } from "lucide-react";
import { Symptom } from "@/data/symptoms";

interface SymptomCardProps {
  symptom: Symptom;
}

export default function SymptomCard({
  symptom,
}: SymptomCardProps) {
  return (
    <button
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-lg
      "
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:scale-110">
        <Thermometer size={20} />
      </div>

      <h3 className="text-base font-semibold text-slate-900">
        {symptom.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
        {symptom.description}
      </p>

      <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        {symptom.category}
      </span>
    </button>
  );
}
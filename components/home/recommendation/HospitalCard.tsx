import GlassCard from "@/components/ui/GlassCard";
import { Star, Clock, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  type: string;
  distance: string;
  time: string;
  rating: number;
  icon: LucideIcon;
  color: string;
}

export default function HospitalCard({
  name,
  type,
  distance,
  time,
  rating,
  icon: Icon,
  color,
}: Props) {
  return (
    <GlassCard className="group p-7">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-slate-500">
        {type}
      </p>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {distance}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {time}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Star
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
        <span className="font-semibold">{rating}</span>
      </div>

      <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white transition hover:scale-[1.02]">
        View Hospital
      </button>
    </GlassCard>
  );
}
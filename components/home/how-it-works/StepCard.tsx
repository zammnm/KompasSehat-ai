import GlassCard from "@/components/ui/GlassCard";
import IconCircle from "@/components/ui/IconCircle";
import { LucideIcon } from "lucide-react";

interface Props {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function StepCard({
  number,
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <GlassCard className="relative h-full p-8 text-center">
      <div className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg">
        {number}
      </div>

      <div className="mt-4 flex justify-center">
        <IconCircle icon={Icon} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </GlassCard>
  );
}
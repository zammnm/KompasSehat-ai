import GlassCard from "@/components/ui/GlassCard";
import IconCircle from "@/components/ui/IconCircle";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <GlassCard className="group h-full p-7">

      <IconCircle icon={Icon} />

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </GlassCard>
  );
}
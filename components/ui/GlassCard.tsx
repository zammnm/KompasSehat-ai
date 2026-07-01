import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[32px]
        border border-white/40
        bg-white/75
        backdrop-blur-xl
        shadow-[0_25px_70px_rgba(15,23,42,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
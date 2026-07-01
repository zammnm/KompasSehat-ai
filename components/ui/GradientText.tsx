import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
}

export default function GradientText({
  children,
}: GradientTextProps) {
  return (
    <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}
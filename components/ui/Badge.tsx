import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
      <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
      {children}
    </div>
  );
}
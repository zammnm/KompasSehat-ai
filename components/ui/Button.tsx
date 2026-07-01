import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1",
    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:-translate-y-1",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
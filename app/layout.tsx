import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import ThemeProvider from "@/components/providers/ThemeProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KompasSehat AI",
  description: "AI Healthcare Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">

        <ThemeProvider>

          {children}

          <Toaster
            richColors
            position="top-right"
          />

        </ThemeProvider>

      </body>
    </html>
  );
}
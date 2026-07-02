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
  description:
    "KompasSehat AI adalah asisten kesehatan berbasis Artificial Intelligence untuk membantu analisis gejala, rekomendasi layanan kesehatan, dan pencarian fasilitas kesehatan terdekat.",
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
      <body className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-white">
        <ThemeProvider>
          {children}

          <Toaster
            richColors
            position="top-right"
            closeButton
            expand
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
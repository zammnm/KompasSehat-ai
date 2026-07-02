"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

const mobileLinks = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Fitur",
    href: "#features",
  },
  {
    label: "Cara Kerja",
    href: "#how-it-works",
  },
  {
    label: "Tentang",
    href: "#about",
  },
  {
    label: "Chat AI",
    href: "/chat",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <div className="hidden lg:block">
            <CTAButton />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {open && (
          <div className="border-t border-slate-200 py-4 lg:hidden">

            <div className="flex flex-col gap-4">

              {mobileLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2">
                <CTAButton />
              </div>

            </div>

          </div>
        )}

      </Container>
    </header>
  );
}
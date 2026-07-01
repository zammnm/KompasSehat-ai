import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import HeroStats from "./HeroStats";
import GradientText from "@/components/ui/GradientText";

export default function HeroContent() {
  return (
    <div>

      <Badge>
        AI-Powered Healthcare Navigation
      </Badge>

      <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 lg:text-7xl">
        Navigate
        <br />
        Healthcare
        <br />
        <GradientText>
          with AI
        </GradientText>
      </h1>

      <p className="mt-7 text-lg leading-8 text-slate-600">
        HealthRoute AI membantu pengguna memahami gejala,
        menentukan tingkat urgensi, dan menemukan layanan
        kesehatan yang tepat menggunakan teknologi
        Artificial Intelligence.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link href="/chat">
          <Button variant="primary">
            Coba HealthRoute AI →
          </Button>
        </Link>

        <Button variant="secondary">
          Watch Demo
        </Button>

      </div>

      <HeroStats />

    </div>
  );
}
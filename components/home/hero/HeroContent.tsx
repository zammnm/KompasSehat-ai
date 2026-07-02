import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import HeroStats from "./HeroStats";
import GradientText from "@/components/ui/GradientText";

export default function HeroContent() {
  return (
    <div>

      <Badge>
        Navigasi Layanan Kesehatan Berbasis AI
      </Badge>

      <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 lg:text-7xl">
        Temukan
        <br />
        Layanan Kesehatan
        <br />
        <GradientText>
          Bersama KompasSehat AI
        </GradientText>
      </h1>

      <p className="mt-7 text-lg leading-8 text-slate-600">
        KompasSehat AI membantu Anda memahami gejala,
        mengetahui tingkat urgensi, serta menemukan
        layanan kesehatan yang tepat melalui analisis
        berbasis Artificial Intelligence (AI).
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link href="/chat">
          <Button variant="primary">
            Mulai Konsultasi AI →
          </Button>
        </Link>

        <Button variant="secondary">
          Pelajari Cara Kerjanya
        </Button>

      </div>

      <HeroStats />

    </div>
  );
}
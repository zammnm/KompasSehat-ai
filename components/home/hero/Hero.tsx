import Container from "@/components/ui/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFF]">
      <HeroBackground />

      <Container>
        <div className="grid min-h-screen items-center gap-20 py-28 lg:grid-cols-2">

          <FadeIn delay={0.1}>
            <HeroContent />
          </FadeIn>

          <FadeIn delay={0.3}>
            <HeroIllustration />
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
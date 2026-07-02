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
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-12 lg:min-h-screen lg:grid-cols-2 lg:gap-20 lg:py-28">

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
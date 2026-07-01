import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionTitle
          badge="FEATURES"
          title="Everything You Need"
          gradient="for Better Healthcare"
          description="HealthRoute AI combines artificial intelligence and healthcare services into one modern platform."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
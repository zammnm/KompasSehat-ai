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
          badge="FITUR UTAMA"
          title="Semua yang Anda Butuhkan"
          gradient="dalam KompasSehat AI"
          description="KompasSehat AI membantu Anda memahami gejala, menilai tingkat urgensi, memberikan rekomendasi layanan kesehatan, serta menemukan fasilitas kesehatan terdekat dengan cepat dan mudah."
        />

        <div className="mt-20 grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-2">
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
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import HospitalCard from "./HospitalCard";
import { hospitals } from "./hospitalsData";

export default function Recommendation() {
  return (
    <Section id="recommendation">
      <Container>

        <SectionTitle
          badge="RECOMMENDATION"
          title="Nearby Healthcare"
          gradient="Recommendations"
          description="AI recommends the best healthcare facilities based on your symptoms and current location."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {hospitals.map((hospital) => (
            <HospitalCard
              key={hospital.name}
              {...hospital}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import StepCard from "./StepCard";
import { steps } from "./stepsData";

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionTitle
          badge="HOW IT WORKS"
          title="Get Healthcare"
          gradient="in 3 Simple Steps"
          description="Using HealthRoute AI is fast, simple, and only takes a few moments."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              number={index + 1}
              {...step}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
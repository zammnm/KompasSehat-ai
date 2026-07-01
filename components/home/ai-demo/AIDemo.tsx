import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import ChatBubble from "./ChatBubble";
import MessageTyping from "./MessageTyping";

export default function AIDemo() {
  return (
    <Section>
      <Container>

        <SectionTitle
          badge="AI DEMO"
          title="See How"
          gradient="HealthRoute AI Works"
          description="A simple preview of how our AI analyzes symptoms."
        />

        <GlassCard className="mx-auto mt-20 max-w-3xl p-8">

          <div className="space-y-5">

            <ChatBubble
              message="I have had a fever and headache for 3 days."
            />

            <div className="flex gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-bold text-white">
                AI
              </div>

              <div className="rounded-3xl bg-slate-100 px-5 py-4">
                <MessageTyping />
              </div>

            </div>

            <ChatBubble
              ai
              message="Based on your symptoms, we recommend visiting a General Practitioner within the next 24 hours."
            />

          </div>

        </GlassCard>

      </Container>
    </Section>
  );
}
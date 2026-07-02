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
          badge="DEMO AI"
          title="Lihat Cara"
          gradient="KompasSehat AI Bekerja"
          description="Simulasi sederhana bagaimana AI menganalisis gejala dan memberikan rekomendasi layanan kesehatan."
        />

        <GlassCard className="mx-auto mt-20 max-w-3xl p-8">

          <div className="space-y-5">

            <ChatBubble
              message="Saya sudah demam tinggi disertai sakit kepala selama 3 hari."
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
              message="Berdasarkan gejala yang Anda sampaikan, kondisi memerlukan pemeriksaan oleh dokter umum dalam waktu 24 jam. Saya juga dapat membantu menemukan rumah sakit atau klinik terdekat."
            />

          </div>

        </GlassCard>

      </Container>
    </Section>
  );
}
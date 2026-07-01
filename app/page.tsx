import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/hero/Hero";
import Trusted from "@/components/home/trusted/Trusted";
import Features from "@/components/home/features/Features";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import AIDemo from "@/components/home/ai-demo/AIDemo";
import Recommendation from "@/components/home/recommendation/Recommendation";
import CTA from "@/components/home/cta/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Trusted />
        <Features />
        <HowItWorks />
        <AIDemo />
        <Recommendation />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
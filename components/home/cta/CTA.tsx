import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-12 text-center text-white shadow-2xl lg:p-20">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            READY TO START?
          </p>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Experience Smarter
            <br />
            Healthcare Navigation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Consult our AI assistant anytime and receive personalized
            healthcare recommendations within seconds.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
              Start AI Consultation
            </button>

            <button className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20">
              Learn More
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}
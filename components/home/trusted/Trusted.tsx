import Container from "@/components/ui/Container";
import { trustedItems } from "./trustedData";

export default function Trusted() {
  return (
    <section className="py-12 border-y border-slate-100 bg-white">

      <Container>

        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Trusted Technologies
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">

          {trustedItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600"
            >
              <Icon size={24} />

              <span className="font-medium">
                {label}
              </span>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}
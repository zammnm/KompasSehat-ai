import Container from "@/components/ui/Container";
import FooterLinks from "./FooterLinks";

import {
  HeartPulse,
  Mail,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white"
    >
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-3 text-white shadow-lg">
                <HeartPulse size={22} />
              </div>

              <h2 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-3xl font-bold text-transparent">
              KompasSehat AI
              </h2>

            </div>

            <p className="mt-5 leading-7 text-slate-500">
          Platform berbasis Artificial Intelligence yang membantu
          masyarakat memahami gejala, mengetahui tingkat urgensi,
          serta menemukan fasilitas kesehatan terdekat dengan cepat
          dan mudah.
       </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <span className="text-lg">🐙</span>
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <Globe size={18} />
              </a>

            </div>
          </div>

          <FooterLinks
            title="Produk"
            links={[
              "AI Consultation",
              "Medical Rekomendasi",
              "Nearby Hospital",
              "Image Analysis",
            ]}
          />

          <FooterLinks
            title="Perusahaan"
            links={[
              "Tentang Kami",
              "Blog",
              "Karier",
              "Kontak",
            ]}
          />

          <FooterLinks
            title="Dukungan"
            links={[
              "Help Center",
              "Privacy Policy",
              "Terms",
              "FAQ",
            ]}
          />

        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 py-8 text-sm text-slate-500 md:flex-row">

  <p>
    © 2026 <span className="font-semibold">KompasSehat AI</span>. Seluruh hak cipta dilindungi.
  </p>

  <p>
    Membantu masyarakat menemukan layanan kesehatan secara lebih cepat dengan dukungan Artificial Intelligence.
  </p>

</div>
      </Container>
    </footer>
  );
}
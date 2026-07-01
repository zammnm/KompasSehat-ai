import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between transition-all duration-300">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-5">
            <button className="hidden text-sm font-medium text-slate-600 transition hover:text-blue-600 lg:block">
              Sign In
            </button>

            <CTAButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
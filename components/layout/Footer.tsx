const footerLinks = {
  Product: ["Features", "AI Chat", "Pricing", "API"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service"],
  Connect: ["Twitter", "LinkedIn", "GitHub", "Contact"],
};

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="group flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-accent shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-900">KompasSehat AI</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              AI-powered healthcare navigation for smarter, faster, and more
              informed medical decisions.
            </p>
            <div className="mt-6 flex gap-3">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-[#2563EB]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} KompasSehat AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
          KompasSehat AI is not a substitute for professional medical advice,
            diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}

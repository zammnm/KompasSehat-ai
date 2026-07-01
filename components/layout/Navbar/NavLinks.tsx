const links = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "AI Chat",
    href: "/chat",
  },
  {
    label: "About",
    href: "#about",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={`relative py-2 text-sm font-medium transition-all duration-300 ${
            index === 0
              ? "text-blue-600"
              : "text-slate-600 hover:text-blue-600"
          }`}
        >
          {item.label}

          {index === 0 && (
            <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-blue-600" />
          )}
        </a>
      ))}
    </nav>
  );
}
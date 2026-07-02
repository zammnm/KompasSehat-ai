const links = [
  {
    label: "Fitur",
    href: "#features",
  },
  {
    label: "Cara Kerja",
    href: "#how-it-works",
  },
  {
    label: "Chat AI",
    href: "/chat",
  },
  {
    label: "Tentang",
    href: "#about",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
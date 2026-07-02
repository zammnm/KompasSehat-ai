interface FooterLinksProps {
  title: string;
  links: string[];
}

export default function FooterLinks({
  title,
  links,
}: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-slate-500 transition hover:text-blue-600"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
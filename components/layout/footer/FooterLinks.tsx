interface Props {
    title: string;
    links: string[];
  }
  
  export default function FooterLinks({
    title,
    links,
  }: Props) {
    return (
      <div>
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          {title}
        </h3>
  
        <ul className="space-y-3">
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
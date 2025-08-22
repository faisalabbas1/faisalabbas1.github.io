export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">My Portfolio</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:underline underline-offset-4">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
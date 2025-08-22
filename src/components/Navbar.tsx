"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-sm">
      {links.map(({ href, label }) => {
        const isActive = active === href;
        return (
          <li key={href}>
            <a
              href={href}
              onClick={() => setOpen(false)}
              className={`relative transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-black/60 dark:text-white/60 hover:text-foreground"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded bg-foreground transition-all duration-300 ${
                  isActive ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">My Portfolio</a>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open ? (
        <div className="md:hidden px-4 pb-4">
          <NavLinks />
        </div>
      ) : null}
    </nav>
  );
}
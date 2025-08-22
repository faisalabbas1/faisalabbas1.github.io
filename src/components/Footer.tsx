export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 mt-24">
      <div className="mx-auto max-w-5xl px-4 text-sm text-black/70 dark:text-white/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>© {year} Your Name. All rights reserved.</div>
        <ul className="flex items-center gap-4">
          <li><a href="#about" className="hover:underline underline-offset-4">About</a></li>
          <li><a href="#projects" className="hover:underline underline-offset-4">Projects</a></li>
          <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-20">
      <div className="mx-auto max-w-5xl px-4 text-sm text-black/70 dark:text-white/70">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
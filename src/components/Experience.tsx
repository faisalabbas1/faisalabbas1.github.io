export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black/[.03] dark:bg-white/[.03]">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <ul className="mt-6 space-y-4 text-black/80 dark:text-white/80">
          <li>
            <div className="font-medium">Company A — Senior Developer</div>
            <div className="text-sm opacity-80">2022 — Present</div>
            <p className="mt-2">Led development of modern React/Next.js apps with strong DX and performance.</p>
          </li>
          <li>
            <div className="font-medium">Company B — Frontend Engineer</div>
            <div className="text-sm opacity-80">2020 — 2022</div>
            <p className="mt-2">Shipped accessible UI components and improved Core Web Vitals.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
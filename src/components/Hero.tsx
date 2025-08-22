export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I am Your Name</h1>
        <p className="mt-4 text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl">
          I build delightful web experiences using Next.js, React, and TypeScript.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded bg-foreground text-background text-sm font-medium">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded border text-sm font-medium">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
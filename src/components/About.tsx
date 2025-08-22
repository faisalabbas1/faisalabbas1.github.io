import Section from "@/components/Section";

export default function About() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind",
    "Framer Motion",
    "Accessibility",
    "Testing",
  ];

  return (
    <Section id="about" title="About" subtitle="A bit about my background and interests.">
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 text-black/80 dark:text-white/80">
          <p>
            I am a software engineer passionate about building performant, accessible,
            and beautiful applications. I enjoy crafting design systems and high-quality
            frontend architecture that scales.
          </p>
          <p className="mt-4">
            My work emphasizes thoughtful motion and crisp, legible typography to create
            interfaces that feel fast and intuitive.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-2">
            {skills.map((s) => (
              <div key={s} className="rounded border px-3 py-2 text-sm bg-background/60">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
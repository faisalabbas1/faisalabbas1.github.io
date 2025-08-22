import Section from "@/components/Section";

export default function Projects() {
  const projects = [
    { title: "Project One", description: "A cool app built with Next.js" },
    { title: "Project Two", description: "An API and dashboard" },
    { title: "Project Three", description: "A design system of components" }
  ];

  return (
    <Section id="projects" title="Projects" subtitle="Selected work that I'm proud of.">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href="#contact"
            className="group rounded-xl border overflow-hidden bg-background/70 hover:bg-background transition-colors"
          >
            <div className="p-4">
              <div className="font-medium flex items-center justify-between">
                {p.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">Inquire →</span>
              </div>
              <p className="text-sm mt-2 text-black/70 dark:text-white/70">{p.description}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </a>
        ))}
      </div>
    </Section>
  );
}
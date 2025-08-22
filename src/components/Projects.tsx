export default function Projects() {
  const projects = [
    { title: "Project One", description: "A cool app built with Next.js" },
    { title: "Project Two", description: "An API and dashboard" },
    { title: "Project Three", description: "A design system of components" }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-lg border p-4">
              <div className="font-medium">{p.title}</div>
              <p className="text-sm mt-2 text-black/70 dark:text-white/70">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
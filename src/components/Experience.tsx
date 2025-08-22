import Section from "@/components/Section";

type Item = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const items: Item[] = [
  {
    role: "Senior Developer",
    company: "Company A",
    period: "2022 — Present",
    summary:
      "Led development of modern React/Next.js apps, improved performance and DX.",
  },
  {
    role: "Frontend Engineer",
    company: "Company B",
    period: "2020 — 2022",
    summary:
      "Shipped accessible UI components and improved Core Web Vitals.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="A snapshot of my recent roles.">
      <ol className="relative border-s pl-6 border-black/10 dark:border-white/10">
        {items.map((item) => (
          <li key={item.company + item.role} className="mb-10 ms-4">
            <span className="absolute -start-[9px] mt-1.5 w-4 h-4 rounded-full border bg-background" />
            <div className="font-medium">
              {item.role} — {item.company}
            </div>
            <div className="text-xs opacity-70">{item.period}</div>
            <p className="mt-2 text-black/80 dark:text-white/80">{item.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
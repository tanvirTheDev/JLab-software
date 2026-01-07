import {
  Atom,
  Cloud,
  Database,
  Orbit,
  PanelsTopLeft,
  Server,
} from "lucide-react";

const STACK_ITEMS = [
  { label: "Next.js", Icon: PanelsTopLeft },
  { label: "React", Icon: Atom },
  { label: "Node.js", Icon: Server },
  { label: "Three.js", Icon: Orbit },
  { label: "AWS", Icon: Cloud },
  { label: "PostgreSQL", Icon: Database },
];

export function TechStackSection() {
  const marqueeItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <section className="w-full py-10 border-y border-border bg-[#f8fbff] dark:bg-[#001a2b]/40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-6">
        <p className="text-sm font-semibold text-center text-[#637588] dark:text-[#94a3b8] uppercase tracking-[0.35em]">
          Trusted by innovative companies
        </p>
      </div>

      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex items-center gap-16 animate-scroll pl-16">
          {marqueeItems.map((item, idx) => (
            <span
              key={`${item.label}-${idx}`}
              className="text-2xl font-bold text-[#637588] dark:text-[#94a3b8] flex items-center gap-2 hover:text-[#00AAAA] transition-colors"
            >
              <item.Icon className="w-7 h-7" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Code, Database, Layout, GitBranch, Terminal } from "lucide-react";

const stack = [
  {
    icon: Terminal,
    title: "Java & Python",
    description: "Backend development, data processing, and system design with strong OOP principles.",
  },
  {
    icon: Code,
    title: "Modern JavaScript",
    description: "React, Next.js, Node.js — building interactive and performant web applications.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Design systems, user experience research, and pixel-perfect responsive interfaces.",
  },
  {
    icon: Database,
    title: "MySQL",
    description: "Relational database design, optimization, and complex query management.",
  },
  {
    icon: GitBranch,
    title: "Version Control & CI/CD",
    description: "GitHub workflows, automated pipelines, and collaborative development practices.",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Technical Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, i) => (
            <div
              key={item.title}
              className={`hover-lift rounded-2xl bg-card p-6 border border-border fade-in-delay-${Math.min(i, 3)}`}
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

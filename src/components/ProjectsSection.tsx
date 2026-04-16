const projects = [
  {
    title: "Gym Management System",
    tags: ["Java", "Swing"],
    description:
      "Desktop application built with OOP principles for membership management, attendance tracking, and class scheduling.",
    featured: true,
  },
  {
    title: "Watch Ecommerce",
    tags: ["HTML", "Tailwind", "JavaScript"],
    description:
      "Fully responsive ecommerce website with product catalog, shopping cart, and checkout flow.",
    featured: false,
  },
  {
    title: "Mart Billing System",
    tags: ["Java", "MySQL"],
    description:
      "Backend-focused retail billing system with inventory management, transaction processing, and reporting.",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured project */}
          <div
            className="hover-lift md:row-span-2 rounded-2xl bg-card border border-border p-8 flex flex-col justify-between fade-in"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                {projects[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {projects[0].description}
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              View Case Study →
            </a>
          </div>

          {/* Side projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.title}
              className="hover-lift rounded-2xl bg-card border border-border p-6 fade-in-delay-1"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

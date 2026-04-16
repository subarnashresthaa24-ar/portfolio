import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative container mx-auto px-4 md:px-8 text-center fade-in">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6">
          Let's build something exceptional together.
        </h2>
        <a
          href="mailto:subarna@example.com"
          className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
};

export default CTASection;

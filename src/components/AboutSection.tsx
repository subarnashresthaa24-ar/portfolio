const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">
            SOFTWARE ENGINEER
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Crafting digital<br />
            <span className="text-primary/60">architectus</span> with precision.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto">
            I am Subarna Shrestha, a Software Engineer dedicated to building robust, scalable systems. My approach merges technical rigor with a keen eye for UI/UX, ensuring that every line of code serves a purposeful user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Crafting digital architectures with precision.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            As a software engineer, I focus on building scalable systems that merge robust backend 
            architecture with thoughtful UI/UX design. I believe in clean code, modular design, and 
            creating solutions that truly serve users. Every project is an opportunity to push boundaries 
            while maintaining simplicity and elegance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

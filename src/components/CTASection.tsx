import { Link } from "react-router-dom";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaBg})` }}
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative py-24 px-8 text-center fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card mb-8">
              Let's build something exceptional<br />together.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:opacity-90"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { ArrowRight, Database, Box } from "lucide-react";
import gymImg from "@/assets/project-gym.jpg";
import watchImg from "@/assets/project-watch.jpg";
import billingImg from "@/assets/project-billing.jpg";

const ProjectsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-foreground" />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              PORTFOLIO
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-lg text-base leading-relaxed">
            A curation of software solutions and digital experiences focusing on precision, architectural integrity, and user-centric design.
          </p>
        </div>

        {/* Gym + Watch row */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Gym - Large */}
          <div className="md:col-span-3 fade-in-delay-1">
            <div className="relative rounded-2xl overflow-hidden mb-5">
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-card/90 backdrop-blur-sm text-foreground border border-border">
                  JAVA
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-card/90 backdrop-blur-sm text-foreground border border-border">
                  SWING
                </span>
              </div>
              <img
                src={gymImg}
                alt="Gym Management System"
                loading="lazy"
                width={1024}
                height={640}
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Gym Management System
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-lg">
              A comprehensive desktop application built with Java and Swing, implementing robust OOP principles for managing memberships, attendance tracking, and equipment maintenance scheduling.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              View Case Study <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Watch - Smaller */}
          <div className="md:col-span-2 fade-in-delay-2">
            <div className="relative rounded-2xl overflow-hidden mb-5">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-card/90 backdrop-blur-sm text-foreground border border-border">
                  ECOMMERCE
                </span>
              </div>
              <img
                src={watchImg}
                alt="Watch Ecommerce"
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Watch Ecommerce
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Responsive storefront featuring an immersive catalog and shopping cart logic.
            </p>
            <p className="text-xs text-muted-foreground">
              HTML5 • CSS • JS
            </p>
          </div>
        </div>

        {/* Mart Billing - Full width split */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-secondary/70 fade-in-delay-3">
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              ENTERPRISE SOLUTION
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mart Billing System
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Scalable backend architecture designed for high-velocity retail environments. Focused on transactional integrity, real-time inventory synchronization, and automated sales reporting using python.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border">
                <Database className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">Inventory Logic</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border">
                <Box className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">Automated Billing</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={billingImg}
              alt="Mart Billing System"
              loading="lazy"
              width={800}
              height={640}
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

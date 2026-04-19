import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import profileImg from "@/assets/ProfileImage.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      
      <div className="relative container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6">
              Subarna<br />Shrestha
            </h1>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">
              SOFTWARE DEVELOPER
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-10 text-base">
              Fresher with a strong foundation in programming and real-world project development. 
              Dedicated to building precise, efficient, and user-centric digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:opacity-90"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border-2 border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-foreground"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="fade-in-delay-2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-card border-[6px] border-card rotate-2"
                style={{ boxShadow: '0 25px 50px -12px hsl(215 30% 18% / 0.15)' }}
              >
                <img
                  src={profileImg}
                  alt="Subarna Shrestha"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

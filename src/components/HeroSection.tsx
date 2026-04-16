import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Welcome
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Subarna<br />Shrestha
            </h1>
            <p className="text-lg font-medium text-muted-foreground mb-3">
              Software Developer
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              Fresher with a strong foundation in programming and real-world project development. 
              Dedicated to building precise, efficient, and user-centric digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="fade-in-delay-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-profile)' }}>
                <img
                  src={profileImg}
                  alt="Subarna Shrestha"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

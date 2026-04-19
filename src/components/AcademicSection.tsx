import { GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    degree: "Bsc Computing",
    institution: "Informatics College Pokhara",
    description: "Specialized in Advanced Programming and Systems Design. Developed a deep understanding of computational theory and software lifecycle management.",
  },
  {
    year: "2022",
    degree: "Diploma in Computer Engineering",
    institution: "Pokhara Engineering College",
    description: "A foundational dive into hardware-software integration, networking, and the fundamentals of engineering logic.",
  },
];

const AcademicSection = () => {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Left - Title */}
          <div className="fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The theoretical framework that informs my practical engineering decisions.
            </p>
          </div>

          {/* Right - Timeline */}
          <div className="md:col-span-2">
            {timeline.map((item, i) => (
              <div key={item.year} className={`flex gap-6 fade-in-delay-${Math.min(i, 3)}`}>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-border mt-2" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>
                <div className="pb-12">
                 <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">
                     {item.degree === "Bsc Computing" ? item.year : `GRADUATED ${item.year}`}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;

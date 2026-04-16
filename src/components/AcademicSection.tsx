import { GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2023",
    degree: "BSc Computing",
    institution: "Informatics College, Pokhara University",
  },
  {
    year: "2020",
    degree: "Diploma in Computer Engineering",
    institution: "Pokhara Engineering College, CTEVT",
  },
];

const AcademicSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Education
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <div key={item.year} className={`flex gap-6 fade-in-delay-${Math.min(i, 3)}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-border my-2" />
                )}
              </div>
              <div className="pb-10">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  {item.year}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1">
                  {item.degree}
                </h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;

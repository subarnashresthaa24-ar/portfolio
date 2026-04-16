import { User } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto fade-in">
          <div className="rounded-2xl bg-secondary/60 border border-border p-10">
            <blockquote className="font-heading text-lg md:text-xl font-medium text-foreground leading-relaxed mb-8 italic">
              "Subarna's ability to navigate complex backend challenges while maintaining front-end elegance is truly exceptional."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">— Sandeep Gurung</p>
                <p className="text-xs text-muted-foreground">Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

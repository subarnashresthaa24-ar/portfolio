import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
          <blockquote className="font-heading text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
            "Subarna's ability to navigate complex backend challenges while maintaining frontend 
            elegance is truly exceptional."
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">Sandeep Gurung</p>
            <p className="text-sm text-muted-foreground">Lead Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

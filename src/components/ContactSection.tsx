import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import contactMapImg from "@/assets/contact-map.jpg";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const mailto = `mailto:subarnashrestha0000@gmail.com?subject=${encodeURIComponent("Project Inquiry from " + form.name.trim())}&body=${encodeURIComponent(form.message.trim())}`;
      window.open(mailto, "_blank");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "EMAIL ME", value: "subarnashrestha0000@gmail.com", href: "mailto:subarnashrestha0000@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="fade-in">
            <p className="text-muted-foreground font-semibold text-xs tracking-[0.2em] uppercase mb-6">
              GET IN TOUCH
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Let's start a<br />conversation.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-10">
              Whether you have a specific project in mind or just want to explore the possibilities of collaboration, I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-foreground font-semibold hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 fade-in-delay-1">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card border border-border p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border pb-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border pb-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-2">Your Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border pb-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all duration-200 hover:opacity-90"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="relative rounded-2xl overflow-hidden h-48">
              <img
                src={contactMapImg}
                alt="Pokhara, Nepal"
                loading="lazy"
                width={1024}
                height={512}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-foreground">
                Based in Pokhara, Nepal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

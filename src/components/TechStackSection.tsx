import { Code, Database, Layout, GitBranch, Terminal, QrCode, Settings } from "lucide-react";

const TechStackSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Technical Stack
          </h2>
          <p className="text-muted-foreground text-base">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {/* Java & Python - outlined */}
          <div className="rounded-2xl bg-card border border-border p-7 fade-in hover-lift">
            <div className="flex items-center justify-between mb-6">
              <Terminal className="w-7 h-7 text-muted-foreground" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">CORE SYSTEMS</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              Java & Python
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building high-performance backend systems and data processing pipelines with a focus on efficiency.
            </p>
          </div>

          {/* Modern JS - dark/filled */}
          <div className="rounded-2xl bg-foreground p-7 fade-in-delay-1 hover-lift">
            <div className="mb-6">
              <Code className="w-7 h-7 text-background/70" />
            </div>
            <h3 className="font-heading text-lg font-bold text-background mb-2">
              Modern JS
            </h3>
            <p className="text-sm text-background/60 leading-relaxed">
              React, Next.js, and Node.js for seamless full-stack applications.
            </p>
          </div>

          {/* UI/UX - outlined */}
          <div className="rounded-2xl bg-card border border-border p-7 fade-in-delay-2 hover-lift">
            <div className="mb-6">
              <Layout className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              UI/UX
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Design systems and user-centric interfaces.
            </p>
          </div>
        </div>

        {/* Row 2: MySQL small + Version Control wide */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* MySQL - compact */}
          <div className="rounded-2xl bg-secondary/80 border border-border p-6 fade-in-delay-2 hover-lift">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-muted-foreground" />
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">MySQL</h3>
                <p className="text-xs text-muted-foreground">Relational DB Design</p>
              </div>
            </div>
          </div>

          {/* Version Control - wide */}
          <div className="md:col-span-1 rounded-2xl bg-card border border-border p-6 fade-in-delay-3 hover-lift">
            <h3 className="font-heading text-base font-bold text-foreground mb-1">
              Version Control & CI/CD
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leveraging GitHub Actions and Git workflows to maintain high code quality and collaborative excellence.
            </p>
          </div>

          {/* Icons decorative */}
          <div className="rounded-2xl bg-card border border-border p-6 flex items-center justify-end gap-4 fade-in-delay-3">
            <QrCode className="w-8 h-8 text-muted-foreground/40" />
            <Settings className="w-8 h-8 text-muted-foreground/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:subarna@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-heading text-lg font-bold text-foreground">
          Dev<span className="text-primary">Portfolio</span>
        </a>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © 2024 Subarna Shrestha
        </p>
      </div>
    </footer>
  );
};

export default Footer;

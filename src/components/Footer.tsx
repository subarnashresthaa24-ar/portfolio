const Footer = () => {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/subarna-shrestha18" },
    { label: "Twitter", href: "#" },
    { label: "Email", href: "mailto:subarnashrestha0000@gmail.com" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm font-bold text-foreground">
          DevPortfolio
        </p>
        <div className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Software Architect. Built with Precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

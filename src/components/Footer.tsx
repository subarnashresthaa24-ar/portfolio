const Footer = () => {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Email", href: "mailto:subarnashrestha0000@gmail.com" },
  ];

  return (
    <footer className="py-8 border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Subarna Shrestha. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
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
      </div>
    </footer>
  );
};

export default Footer;

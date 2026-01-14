const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-foreground">
              HACK<span className="text-primary">IFY</span>
            </span>
            <span className="text-muted-foreground text-sm">
              · From sourcing to winning.
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HACKIFY. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

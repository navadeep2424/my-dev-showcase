const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-muted-foreground">
          © 2026 Navadeep. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-body">
          Built with <span className="text-primary">♥</span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const navLinks = [
  { label: "Websites", href: "#websites" },
  { label: "AI Workflows", href: "#workflows" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#skills" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="flex flex-col">
          <span className="font-display text-xl font-bold text-gradient leading-none">Navadeep</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5 font-display font-medium">AI Web Developer</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/navadeep-rudraraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

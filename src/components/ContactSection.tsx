import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/navadeep-rudraraju/", label: "LinkedIn" },
  { icon: Phone, href: "tel:+917396489578", label: "Call Me" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-primary text-sm mb-2 tracking-wider uppercase">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Let's Build
            <br />
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and creative ideas.
          </p>

          <a
            href="tel:+917396489578"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-medium text-lg hover:opacity-90 transition-opacity mb-12"
          >
            Get In Touch
          </a>

          <div className="flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

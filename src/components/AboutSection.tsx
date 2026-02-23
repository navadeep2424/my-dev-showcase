import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-primary text-sm mb-2 tracking-wider uppercase">
              About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Crafting the web,
              <br />
              <span className="text-gradient">one pixel at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm a full-stack developer with 5+ years of experience building modern web applications. 
                I specialize in React ecosystems and love turning complex problems into elegant, 
                user-friendly solutions.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source, writing technical 
                articles, or exploring the latest web technologies. I believe great software is built 
                at the intersection of design and engineering.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "30+", label: "Happy Clients" },
              { number: "10+", label: "Open Source Repos" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-colors duration-300"
              >
                <p className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

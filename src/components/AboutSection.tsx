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
              Scalable Websites,
              <br />
              <span className="text-gradient">Intelligent AI Solutions.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I’m a full-stack web developer with hands-on experience in building high-performance, scalable, and conversion-focused websites. I specialize in WordPress, React, Next.js, and modern frontend technologies, delivering fast, responsive, and user-friendly digital solutions for businesses across various industries.
              </p>
              <p>
                Along with development, I design and implement AI-powered automation workflows using tools like n8n and leading LLM APIs to reduce manual work, improve efficiency, and help businesses scale. I’m passionate about performance optimization, SEO, and creating smart systems that drive real business growth.
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
              { number: "50+", label: "Projects Delivered" },
              { number: "2+", label: "Years Experience" },
              { number: "20+", label: "Happy Clients" },
              { number: "10+", label: "AI Workflows Built" },
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

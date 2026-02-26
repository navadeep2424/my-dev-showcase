import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 px-6 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow bg-secondary/50 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-display text-sm text-primary">Web Developer & AI Automation Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6"
          >
            Web Development That
            <br />
            <span className="text-gradient glow-text">Drives Real Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 font-body"
          >
            From WordPress to React & AI automation workflows, I create fast, user-focused
            digital experiences that turn visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-medium hover:opacity-90 transition-opacity glow-cyber"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="inline-flex px-7 py-3.5 rounded-full border border-border text-foreground font-display font-medium hover:border-primary/50 transition-colors"
            >
              About Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

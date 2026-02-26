import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Cpu,
  Layers,
  Wrench,
  CheckCircle2
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "Responsive Design", "UI / UX Best Practices", "JavaScript"],
  },
  {
    title: "WordPress & CMS",
    icon: <Globe className="w-6 h-6" />,
    skills: ["WordPress Development", "Theme & Plugin Customization", "Performance Optimization", "SEO & Speed Optimization", "Website Security", "Headless CMS (Strapi)", "Figma to WordPress"],
  },
  {
    title: "Modern Web Development",
    icon: <Layers className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "Dynamic Web Applications", "SEO-Friendly Architecture", "Scalable Web Solutions"],
  },
  {
    title: "Automation & AI",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["N8N Workflow Automation", "AI Chatbots (GPT, Gemini, Claude APIs)", "Lead Automation & AI Call Agents", "Automated Blog & Content Systems", "Website Monitoring & Alerts", "Google Indexing Automation", "Backup & Domain Monitoring"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "VS Code", "Canva", "Hosting & cPanel", "SSL & Domain Setup", "Troubleshooting & Client Communication"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="font-display text-primary text-sm mb-3 tracking-[0.3em] uppercase font-bold">
            Expertise
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-6">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group flex flex-col h-full p-8 rounded-2xl border border-white/5 bg-secondary/10 backdrop-blur-md hover:bg-secondary/20 hover:border-primary/30 hover:glow-cyber transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4 flex-grow">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1.5 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary/40 group-hover/item:text-primary transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground font-body transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                  Expertise Level: Advanced
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


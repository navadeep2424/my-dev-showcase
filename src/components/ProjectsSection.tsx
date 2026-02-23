import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Velocity",
    description: "A blazing-fast e-commerce platform built with Next.js and headless CMS. Features real-time inventory, dynamic pricing, and sub-second page loads.",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pulse Dashboard",
    description: "Analytics dashboard for SaaS companies with real-time data visualization, custom reporting, and AI-powered insights.",
    tags: ["TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Nomad",
    description: "A social platform connecting remote workers with co-working spaces globally. Real-time chat, booking system, and community features.",
    tags: ["React", "Firebase", "Maps API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group grid md:grid-cols-2 gap-8 items-center"
  >
    <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
      <div className="overflow-hidden rounded-xl border border-border glow-amber">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
    <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
      <h3 className="font-display text-3xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-5 font-body leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-display font-medium bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href={project.liveUrl}
          className="inline-flex items-center gap-2 text-sm font-display text-primary hover:opacity-80 transition-opacity"
        >
          <ExternalLink className="w-4 h-4" /> Live Site
        </a>
        <a
          href={project.githubUrl}
          className="inline-flex items-center gap-2 text-sm font-display text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" /> Source
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-display text-primary text-sm mb-2 tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Selected Work
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

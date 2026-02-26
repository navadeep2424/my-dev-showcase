import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const websites = [
    {
        title: "Velocity",
        description: "A blazing-fast e-commerce platform built with Next.js and headless CMS. Features real-time inventory, dynamic pricing, and sub-second page loads.",
        tags: ["React", "Next.js", "Stripe", "Tailwind"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
    {
        title: "CryptoFlow",
        description: "Real-time cryptocurrency portfolio tracker with advanced charting, price alerts, and news integration.",
        tags: ["Web3.js", "Next.js", "Redis", "Tailwind"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
        liveUrl: "#",
        githubUrl: "#",
    },
];

const WebsiteCard = ({ project }: { project: any }) => (
    <div className="group h-full flex flex-col bg-card/30 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                    <a href={project.liveUrl} className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} className="p-2 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-6 font-body leading-relaxed text-sm flex-grow">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-display font-medium bg-secondary/50 text-secondary-foreground border border-border">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const WebsitesSection = () => {
    return (
        <section id="websites" className="py-24 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <p className="font-display text-primary text-sm mb-2 tracking-wider uppercase">Website Showcase</p>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold">Premium Web Solutions</h2>
                    </div>
                    <Link
                        to="/websites"
                        className="group inline-flex items-center gap-2 text-primary font-display font-medium hover:gap-3 transition-all"
                    >
                        View More Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {websites.map((project) => (
                        <WebsiteCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebsitesSection;

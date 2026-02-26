import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
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
    {
        title: "Apex Landing",
        description: "High-conversion landing page for complex software services. Focused on speed and accessibility.",
        tags: ["Astro", "TailwindCSS", "Cloudflare"],
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Nexus CMS",
        description: "Custom headless content management system tailored for media-heavy websites.",
        tags: ["Node.js", "MongoDB", "React"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        liveUrl: "#",
        githubUrl: "#",
    },
];

const Websites = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="py-32 px-6">
                <div className="container mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-gradient">All Websites</h1>
                        <p className="text-muted-foreground text-xl max-w-2xl font-body">
                            A comprehensive list of high-performance web applications and landing pages I've built.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {websites.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col bg-card/30 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="font-display text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-muted-foreground mb-6 font-body text-sm flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-[10px] uppercase font-display font-medium bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a href={project.liveUrl} className="text-primary hover:underline flex items-center gap-1.5 text-sm font-display font-medium">
                                            <ExternalLink className="w-4 h-4" /> Live Site
                                        </a>
                                        <a href={project.githubUrl} className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-display font-medium">
                                            <Github className="w-4 h-4" /> Source
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Websites;

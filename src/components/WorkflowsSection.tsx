import { motion } from "framer-motion";
import { ExternalLink, Cpu, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const workflows = [
    {
        title: "Zenith AI",
        description: "An AI-powered document analysis tool that extracts key insights, summarizes long texts, and provides intelligent Q&A capabilities.",
        tags: ["OpenAI", "Python", "React", "Automation"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        link: "#",
    },
    {
        title: "Pulse AI Dashboard",
        description: "Analytics dashboard for SaaS companies with AI-powered predictive insights and automated reporting systems.",
        tags: ["TypeScript", "D3.js", "AI Insights", "Automation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        link: "#",
    },
    {
        title: "Eco-Automation",
        description: "Smart automation system for tracking and optimizing environmental impact for large scale manufacturing units.",
        tags: ["IoT", "Supabase", "Workflows", "Automation"],
        image: "https://images.unsplash.com/photo-1542601906-973ad1bc58ee?w=800&q=80",
        link: "#",
    },
];

const WorkflowCard = ({ workflow }: { workflow: any }) => (
    <div className="group h-full flex flex-col bg-secondary/20 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:bg-secondary/30 transition-all duration-300">
        <div className="p-1">
            <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                    src={workflow.image}
                    alt={workflow.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                    <Cpu className="w-5 h-5 text-primary" />
                </div>
            </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display">Active Automation</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{workflow.title}</h3>
            <p className="text-muted-foreground mb-6 font-body leading-relaxed text-sm flex-grow">
                {workflow.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {workflow.tags.map((tag: string) => (
                    <span key={tag} className="flex items-center gap-1.5 text-[10px] uppercase font-display font-semibold text-primary/80">
                        <Zap className="w-3 h-3" /> {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const WorkflowsSection = () => {
    return (
        <section id="workflows" className="py-24 px-6 bg-accent/5">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <p className="font-display text-primary text-sm mb-2 tracking-wider uppercase">AI Workflows Showcase</p>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold">Intelligent Automations</h2>
                    </div>
                    <Link
                        to="/workflows"
                        className="group inline-flex items-center gap-2 text-primary font-display font-medium hover:gap-3 transition-all"
                    >
                        View All Workflows <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workflows.map((workflow) => (
                        <WorkflowCard key={workflow.title} workflow={workflow} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowsSection;

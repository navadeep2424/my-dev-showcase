import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const workflows = [
    {
        title: "Zenith AI",
        description: "An AI-powered document analysis tool that extracts key insights, summarizes long texts, and provides intelligent Q&A capabilities.",
        tags: ["OpenAI", "Python", "React", "Automation"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
        title: "Pulse AI Dashboard",
        description: "Analytics dashboard for SaaS companies with AI-powered predictive insights and automated reporting systems.",
        tags: ["TypeScript", "D3.js", "AI Insights", "Automation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
        title: "Eco-Automation",
        description: "Smart automation system for tracking and optimizing environmental impact for large scale manufacturing units.",
        tags: ["IoT", "Supabase", "Workflows", "Automation"],
        image: "https://images.unsplash.com/photo-1542601906-973ad1bc58ee?w=800&q=80",
    },
    {
        title: "MailFlow AI",
        description: "Intelligent email sorting and automated response system using custom LLM agents for customer support.",
        tags: ["GPT-4", "Node.js", "Resend", "Agents"],
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    },
    {
        title: "SupplyChain Sync",
        description: "AI-driven inventory forecasting and automated reordering system for e-commerce brands.",
        tags: ["Python", "AWS Lambda", "Forecasting"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
];

const AIWorkflows = () => {
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
                        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-gradient">AI Workflows</h1>
                        <p className="text-muted-foreground text-xl max-w-2xl font-body">
                            A gallery of intelligent automations and AI-integrated systems designed to save time and scale business operations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workflows.map((workflow, idx) => (
                            <motion.div
                                key={workflow.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col bg-secondary/10 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:bg-secondary/20 transition-all duration-300"
                            >
                                <div className="p-1">
                                    <div className="relative aspect-video overflow-hidden rounded-xl">
                                        <img src={workflow.image} alt={workflow.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                        <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                                            <Cpu className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display">Active Workflow</span>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{workflow.title}</h3>
                                    <p className="text-muted-foreground mb-6 font-body text-sm flex-grow">{workflow.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {workflow.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1.5 text-[10px] uppercase font-display font-semibold text-primary/80">
                                                <Zap className="w-3 h-3" /> {tag}
                                            </span>
                                        ))}
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

export default AIWorkflows;

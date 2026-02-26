import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden py-16 md:py-0">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center px-6 md:px-4 w-full"
            >
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-blue-400 mb-6 inline-block">
                    Portfolio Under Construction
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                    Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Soon</span>
                </h1>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
                    I'm currently building something amazing. My new portfolio will be live shortly.
                    Reach out or connect with me through the links below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Mail, label: "Email", value: "contact@navadeepvarma.in", href: "mailto:contact@navadeepvarma.in" },
                        { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/navadeep-rudraraju/" },
                        { icon: Phone, label: "Phone", value: "+91 6302633617", href: "tel:+916302633617" }
                    ].map((contact, idx) => (
                        <motion.a
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center md:flex-col md:items-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 md:mr-0 md:mb-4 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                                <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                            </div>
                            <div className="text-left md:text-center">
                                <h3 className="font-semibold text-sm md:text-base mb-0.5">{contact.label}</h3>
                                <p className="text-xs md:text-sm text-gray-400 truncate max-w-[180px] md:max-w-none">{contact.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Footer hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 md:mt-0 md:absolute md:bottom-8 text-gray-500 text-xs md:text-sm text-center"
            >
                © {new Date().getFullYear()} Navadeep Varma. All rights reserved.
            </motion.div>
        </div>
    );
};

export default ComingSoon;

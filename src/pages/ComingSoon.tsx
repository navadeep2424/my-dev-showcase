import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center px-4"
            >
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-400 mb-6 inline-block">
                    Portfolio Under Construction
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Soon</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    I'm currently building something amazing. My new portfolio will be live shortly.
                    In the meantime, feel free to reach out through the contact details below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:contact@navadeepvarma.in"
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-gray-400">contact@navadeepvarma.in</p>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://linkedin.com/in/navadeepvarma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <Linkedin className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="font-semibold mb-1">LinkedIn</h3>
                        <p className="text-sm text-gray-400">Connect with me</p>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+916302633617"
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <Phone className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-sm text-gray-400">+91 6302633617</p>
                    </motion.a>
                </div>
            </motion.div>

            {/* Footer hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 text-gray-500 text-sm"
            >
                © {new Date().getFullYear()} Navadeep Varma. All rights reserved.
            </motion.div>
        </div>
    );
};

export default ComingSoon;

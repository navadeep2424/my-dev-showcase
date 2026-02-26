import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WebsitesSection from "@/components/WebsitesSection";
import WorkflowsSection from "@/components/WorkflowsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WebsitesSection />
      <WorkflowsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

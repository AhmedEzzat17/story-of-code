
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";
import { useEffect } from "react";

const Index = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 70,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-deep-purple text-portfolio-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;

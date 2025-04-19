
import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const Index = () => {
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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-portfolio-deep-purple text-portfolio-white">
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        <Button variant="default" size="sm" className="bg-portfolio-purple">
          React Version
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.location.href = '/basic'}
          className="text-portfolio-gray hover:text-portfolio-teal"
        >
          HTML Version
        </Button>
      </div>
      <Navbar />
      <HeroSection />
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>
      <SectionWrapper>
        <FooterSection />
      </SectionWrapper>
    </div>
  );
};

export default Index;

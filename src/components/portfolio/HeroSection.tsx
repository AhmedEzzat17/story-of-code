import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Terminal } from 'lucide-react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-8 h-8 text-portfolio-teal rotate-12 transition-transform group-hover:rotate-0" />
            <Terminal className="w-6 h-6 text-portfolio-purple absolute -bottom-1 -right-1 -rotate-12 transition-transform group-hover:rotate-0" />
          </div>
          
          {/* Ensuring visibility of previously invisible text */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight hero-glow">
            <span className="bg-gradient-to-r from-portfolio-teal to-portfolio-purple bg-clip-text text-transparent">
              Ahmed Ezzat
            </span>
            <br />
            Full Stack Developer
          </h1>
          
          {/* Existing description with improved contrast */}
          <p className="text-portfolio-gray text-lg mb-6 font-medium">
            Creating innovative web solutions with cutting-edge technologies. 
            Transforming ideas into elegant, efficient digital experiences.
          </p>
          
          <div className="flex space-x-4">
            <Button variant="default" size="lg" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </motion.div>
        
        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="/images/hero-image.png" 
              alt="Ahmed Ezzat - Developer" 
              className="w-full max-w-md mx-auto animate-float"
            />
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple/20 rounded-full filter blur-3xl animate-slow-spin"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-portfolio-teal/20 rounded-full filter blur-3xl"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-portfolio-gray text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-portfolio-gray/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-portfolio-teal rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

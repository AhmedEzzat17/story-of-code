import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Terminal, Download } from 'lucide-react';

const HeroSection = () => {
  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
        type: "spring",
        stiffness: 50
      }
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: { 
        duration: 0.3 
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-left"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-8 h-8 text-portfolio-teal rotate-12 transition-transform group-hover:rotate-0" />
            <Terminal className="w-6 h-6 text-portfolio-purple absolute -bottom-1 -right-1 -rotate-12 transition-transform group-hover:rotate-0" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight hero-glow">
            <span className="bg-gradient-to-r from-portfolio-teal to-portfolio-purple bg-clip-text text-transparent">
              Ahmed Ezzat
            </span>
            <br />
            front End Developer
          </h1>
          
          <p className="text-portfolio-gray text-lg mb-6 font-medium">
            Creating innovative web solutions with cutting-edge technologies. 
            Transforming ideas into elegant, efficient digital experiences.
          </p>
          
          <div className="flex space-x-4">
            <Button variant="default" size="lg" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
            <Button variant="outline" style={{color:"black"}} size="lg">
              Contact Me
            </Button>
          </div>
        </motion.div>
        
        {/* Image Content */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="relative group"
        >
          <div className="relative z-10">
            <img 
              src="/lovable-uploads/8f60ba9a-f2e1-47ce-ae55-3708236a77db.png" 
              alt="Ahmed Ezzat - Developer" 
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl animate-float transition-all duration-300 group-hover:shadow-xl"
            />
          </div>
          
          {/* Background Elements */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-portfolio-teal/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

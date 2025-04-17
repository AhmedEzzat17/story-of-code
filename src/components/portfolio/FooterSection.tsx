import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Code, Terminal } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-portfolio-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-4 md:mb-0 flex items-center gap-2 group">
            <div className="relative">
              <Code className="w-8 h-8 text-portfolio-teal rotate-12 transition-transform group-hover:rotate-0" />
              <Terminal className="w-6 h-6 text-portfolio-purple absolute -bottom-1 -right-1 -rotate-12 transition-transform group-hover:rotate-0" />
            </div>
            <div className="flex flex-col items-start">
              <a href="#home" className="text-xl font-bold bg-gradient-to-r from-portfolio-teal to-portfolio-purple bg-clip-text text-transparent">
                Ahmed Ezzat
              </a>
              <p className="text-sm text-portfolio-gray mt-2">
                &copy; {currentYear} All rights reserved
              </p>
            </div>
          </div>
          
          {/* Footer navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a href="#home" className="text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors">Home</a>
            <a href="#about" className="text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors">About</a>
            <a href="#skills" className="text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors">Contact</a>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors">
              <Github size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
        
        {/* Created by note */}
        <div className="flex items-center justify-center mt-6">
          <p className="text-xs text-portfolio-gray flex items-center">
            Made with <Heart size={12} className="mx-1 text-red-500" /> by a creative front-end developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

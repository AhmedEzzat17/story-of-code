
import { ArrowRight, Code, Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/4 text-portfolio-purple/20 animate-float">
        <Terminal size={40} className="animate-slow-spin" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-portfolio-teal/20 animate-float" style={{ animationDelay: '1s' }}>
        <Code size={50} className="animate-slow-spin" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-portfolio-teal mb-2 tracking-wider font-medium">AHMED EZZAT | FRONT-END DEVELOPER</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-glow">
            Crafting <span className="text-gradient purple-gradient">Digital</span> 
            <br />
            Experiences with <span className="text-gradient teal-gradient">Code</span>
          </h1>
          <p className="text-xl text-portfolio-gray mb-8">
            I transform ideas into elegant, interactive web solutions that breathe life into digital landscapes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-portfolio-purple hover:bg-portfolio-bright-purple text-white py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center group"
            >
              View My Work 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="border border-portfolio-purple hover:border-portfolio-teal text-portfolio-gray hover:text-portfolio-teal py-3 px-8 rounded-md transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-portfolio-gray text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-portfolio-gray rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-portfolio-teal rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

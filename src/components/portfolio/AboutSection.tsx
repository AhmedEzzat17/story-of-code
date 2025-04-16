
import { Github, Linkedin, Twitter, FileCode } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-portfolio-purple/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image column */}
          <div className="md:w-2/5 relative">
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-portfolio-purple/20 mx-auto md:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-portfolio-bright-purple/20 to-portfolio-teal/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-4 border-portfolio-teal/20 -z-10"></div>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:text-portfolio-teal hover:border-portfolio-teal transition-colors duration-300">
                <FileCode size={20} />
              </a>
            </div>
          </div>
          
          {/* Content column */}
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-portfolio-purple mb-6"></div>
            
            <p className="text-portfolio-gray mb-4">
              Hello! I'm a passionate front-end developer with a keen eye for design and a love for creating seamless user experiences. My journey in web development started 5 years ago, and I've been crafting digital experiences ever since.
            </p>
            
            <p className="text-portfolio-gray mb-6">
              I specialize in building modern, responsive websites and applications using the latest technologies. My approach combines technical expertise with creative problem-solving to deliver intuitive and visually appealing interfaces.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <div>
                  <h3 className="font-medium">Name:</h3>
                  <p className="text-portfolio-gray">John Developer</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <div>
                  <h3 className="font-medium">Email:</h3>
                  <p className="text-portfolio-gray">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <div>
                  <h3 className="font-medium">Location:</h3>
                  <p className="text-portfolio-gray">New York, USA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <div>
                  <h3 className="font-medium">Availability:</h3>
                  <p className="text-portfolio-gray">Available for freelance</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-portfolio-purple hover:bg-portfolio-bright-purple text-white py-3 px-6 rounded-md transition-all duration-300"
            >
              Download CV
              <FileCode size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

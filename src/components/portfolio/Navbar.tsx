
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Code, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-portfolio-deep-purple/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Code className="w-8 h-8 text-portfolio-teal rotate-12 transition-transform group-hover:rotate-0" />
            <Terminal className="w-6 h-6 text-portfolio-purple absolute -bottom-1 -right-1 -rotate-12 transition-transform group-hover:rotate-0" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold bg-gradient-to-r from-portfolio-teal to-portfolio-purple bg-clip-text text-transparent">
              Ahmed Ezzat
            </span>
            <span className="text-xs text-portfolio-gray tracking-wider">DEVELOPER</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-portfolio-gray hover:text-portfolio-teal transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-portfolio-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-portfolio-deep-purple/90 backdrop-blur-md px-4 py-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-portfolio-gray hover:text-portfolio-teal py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

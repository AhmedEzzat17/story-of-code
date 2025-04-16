
import { useState } from 'react';
import React from 'react';
import { 
  Code, 
  Palette, 
  Laptop, 
  LayoutGrid, 
  Cog, 
  CheckCircle2 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  icon: React.ElementType;
  skills: string[];
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories: SkillCategory[] = [
    {
      name: "Front-End",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Svelte"]
    },
    {
      name: "Styling",
      icon: Palette,
      skills: ["Tailwind CSS", "SASS/SCSS", "CSS-in-JS", "Bootstrap", "Material UI", "Styled Components", "Animations", "Responsive Design"]
    },
    {
      name: "Tools",
      icon: Cog,
      skills: ["Git & GitHub", "VS Code", "Webpack", "Vite", "npm/yarn", "Jest", "Cypress", "ESLint/Prettier"]
    },
    {
      name: "UI/UX",
      icon: LayoutGrid,
      skills: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "User Testing", "Accessibility", "Color Theory", "Typography"]
    },
    {
      name: "Other",
      icon: Laptop,
      skills: ["REST APIs", "GraphQL", "Node.js basics", "Performance Optimization", "SEO Fundamentals", "Web Vitals", "Cross-browser Testing", "Progressive Web Apps"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-portfolio-deep-purple/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-portfolio-purple/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-portfolio-teal/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6"></div>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my front-end development journey. I'm constantly learning and adding new technologies to my toolkit.
          </p>
        </div>
        
        {/* Skills categories navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300",
                activeCategory === index 
                  ? "bg-portfolio-purple text-white" 
                  : "bg-portfolio-deep-purple border border-portfolio-purple/30 text-portfolio-gray hover:border-portfolio-teal hover:text-portfolio-teal"
              )}
            >
              <category.icon size={18} />
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills content */}
        <div className="bg-portfolio-deep-purple/80 backdrop-blur-sm border border-portfolio-purple/10 rounded-xl p-6 md:p-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            {React.createElement(categories[activeCategory].icon, { 
              size: 24, 
              className: "text-portfolio-purple" 
            })}
            <h3 className="text-xl font-semibold">{categories[activeCategory].name} Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories[activeCategory].skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 group">
                <CheckCircle2 size={18} className="text-portfolio-teal group-hover:scale-110 transition-transform" />
                <span className="text-portfolio-gray">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

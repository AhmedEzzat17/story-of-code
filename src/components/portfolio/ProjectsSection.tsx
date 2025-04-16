
import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    code?: string;
  };
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing.",
      image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "A web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
      image: "bg-gradient-to-br from-teal-500/20 to-green-400/20",
      tags: ["Vue.js", "Firebase", "SCSS", "D3.js"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 3,
      title: "Social Media Platform",
      description: "A responsive social network interface with features like post creation, commenting, user profiles, and real-time notifications.",
      image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 4,
      title: "Weather Application",
      description: "A beautiful weather app with location-based forecasts, animated weather conditions, and weekly predictions.",
      image: "bg-gradient-to-br from-yellow-400/20 to-orange-500/20",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A drag-and-drop task management application with features like task categories, priorities, and deadline notifications.",
      image: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      tags: ["React", "Redux", "Styled Components", "TypeScript"],
      links: {
        demo: "#"
      }
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A creative and interactive portfolio website to showcase projects, skills, and professional information.",
      image: "bg-gradient-to-br from-indigo-500/20 to-pink-500/20",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];
  
  const filters = [
    'all', 'React', 'JavaScript', 'TypeScript', 'CSS', 'Vue.js'
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-portfolio-teal/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6"></div>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to apply different technologies and design principles.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-portfolio-purple text-white'
                  : 'bg-portfolio-deep-purple/80 border border-portfolio-purple/30 text-portfolio-gray hover:border-portfolio-teal hover:text-portfolio-teal'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-portfolio-deep-purple/80 backdrop-blur-sm border border-portfolio-purple/10 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-portfolio-purple/10 group"
            >
              {/* Project image */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <Code size={48} className="text-white/30 group-hover:text-white/50 transition-colors duration-300" />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-teal"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-gray">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-gray text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Project links */}
                <div className="flex gap-3">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      className="flex items-center gap-1 text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  
                  {project.links.code && (
                    <a 
                      href={project.links.code} 
                      className="flex items-center gap-1 text-sm text-portfolio-gray hover:text-portfolio-teal transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show more button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-transparent border border-portfolio-purple text-portfolio-gray py-3 px-6 rounded-md hover:border-portfolio-teal hover:text-portfolio-teal transition-all duration-300"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

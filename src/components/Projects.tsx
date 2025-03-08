
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "College Management System",
      description: "A comprehensive system for managing college resources, student records, and faculty information using Java and MySQL.",
      technologies: ["Java", "MySQL", "Swing"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop"
    },
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform with product catalog, shopping cart, and payment integration.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop"
    },
    {
      title: "Weather Application",
      description: "A real-time weather forecasting application using public APIs to display current and weekly weather data.",
      technologies: ["JavaScript", "React", "API Integration"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of my technical work and projects that I've developed.
        </p>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md opacity-0 animate-appear"
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="chip">{tech}</span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-black"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';

const Skills: React.FC = () => {
  const programmingSkills = [
    { name: "HTML & CSS", level: 90, icon: "🌐" },
    { name: "JavaScript", level: 85, icon: "📜" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "C/C++", level: 70, icon: "⚙️" },
    { name: "SQL", level: 80, icon: "🛢️" }
  ];

  const techSkills = [
    { name: "Web Development", level: 85 },
    { name: "Database Management", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Version Control (Git)", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Mobile App Development", level: 65 }
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          My technical expertise and abilities that I've developed through education and projects.
        </p>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-black h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: '0%', animationDelay: `${600 + index * 100}ms` }}
                    onAnimationStart={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.width = `${skill.level}%`;
                      }, 600 + index * 100);
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techSkills.map((skill, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-appear"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-black h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: '0%', animationDelay: `${1000 + index * 100}ms` }}
                    onAnimationStart={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.width = `${skill.level}%`;
                      }, 1000 + index * 100);
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

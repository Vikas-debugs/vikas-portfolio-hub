
import React from 'react';

const About: React.FC = () => {
  const educationTimeline = [
    {
      period: "Present",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "BCA College",
      description: "Currently pursuing a degree in Computer Applications, focusing on programming, database management, and web development."
    },
    {
      period: "2020",
      degree: "Intermediate",
      institution: "High School",
      description: "Completed intermediate education with focus on science and mathematics."
    },
    {
      period: "2018",
      degree: "High School",
      institution: "High School",
      description: "Completed high school education with distinction in computer science and mathematics."
    }
  ];

  const hobbies = [
    { name: "Coding", icon: "💻" },
    { name: "Reading", icon: "📚" },
    { name: "Music", icon: "🎵" },
    { name: "Photography", icon: "📷" }
  ];

  return (
    <section id="about" className="section-container">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate BCA student with a strong interest in technology and programming.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-2 flex flex-col items-center justify-start opacity-0 animate-slide-up" style={{animationDelay: '200ms'}}>
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg mb-6">
              <img 
                src="/lovable-uploads/fd4c043c-9f5b-4d41-8dd6-5705dabceb5b.png" 
                alt="Vikas Yadav" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Vikas Yadav</h3>
              <p className="text-gray-600">BCA Student</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 opacity-0 animate-slide-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm Vikas Yadav, a dedicated Bachelor of Computer Applications (BCA) student passionate about creating innovative solutions through code.
              </p>
              <p>
                My journey in technology began during my high school years where I developed a strong foundation in computer science and mathematics. This early interest has evolved into a dedicated pursuit of knowledge in various programming languages and technologies.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with emerging technologies. My goal is to develop applications that not only solve real-world problems but also provide seamless user experiences.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-slide-up" style={{animationDelay: '400ms'}}>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-6">
            {educationTimeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l border-gray-200">
                <span className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-white border-2 border-black"></span>
                <span className="text-sm font-medium text-gray-500">{item.period}</span>
                <h4 className="text-base font-semibold mt-1">{item.degree}</h4>
                <p className="text-sm text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-slide-up" style={{animationDelay: '600ms'}}>
          <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-300">
                <span className="text-3xl mb-2">{hobby.icon}</span>
                <h4 className="text-base font-medium">{hobby.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

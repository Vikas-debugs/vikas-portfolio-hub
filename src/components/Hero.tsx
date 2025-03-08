
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-blue-50 opacity-30 animate-pulse-light"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-blue-50 opacity-30 animate-pulse-light" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 z-10 text-center">
        <div className="mb-6 flex justify-center opacity-0 animate-fade-in">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
            <AvatarImage src="/lovable-uploads/fd4c043c-9f5b-4d41-8dd6-5705dabceb5b.png" alt="Vikas Yadav" />
            <AvatarFallback>VY</AvatarFallback>
          </Avatar>
        </div>
        
        <span className="chip mb-4 opacity-0 animate-fade-in">BCA Student</span>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight opacity-0 animate-fade-in" style={{animationDelay: '200ms'}}>
          Vikas Yadav
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '400ms'}}>
          Turning ideas into elegant code — exploring the intersection of technology and creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '600ms'}}>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-md border border-gray-300 font-medium hover:bg-gray-50 transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

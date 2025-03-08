
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 text-xl font-medium transition-colors duration-200 hover:text-black">
          <Avatar className="h-8 w-8 md:hidden">
            <AvatarImage src="/lovable-uploads/fd4c043c-9f5b-4d41-8dd6-5705dabceb5b.png" alt="Vikas Yadav" />
            <AvatarFallback>VY</AvatarFallback>
          </Avatar>
          <span>Vikas Yadav</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="md:hidden">
          <button 
            className="p-2 rounded-md hover:bg-secondary transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/lovable-uploads/fd4c043c-9f5b-4d41-8dd6-5705dabceb5b.png" alt="Vikas Yadav" />
              <AvatarFallback>VY</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Vikas Yadav</p>
              <p className="text-sm text-gray-500">BCA Student</p>
            </div>
          </div>
          <nav className="flex flex-col space-y-3">
            <a href="#about" className="py-2 hover:text-gray-900" onClick={toggleMobileMenu}>About</a>
            <a href="#skills" className="py-2 hover:text-gray-900" onClick={toggleMobileMenu}>Skills</a>
            <a href="#projects" className="py-2 hover:text-gray-900" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="py-2 hover:text-gray-900" onClick={toggleMobileMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

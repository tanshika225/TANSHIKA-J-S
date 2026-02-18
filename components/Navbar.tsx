
import React, { useState, useEffect } from 'react';

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Fixed header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass-nav py-3 shadow-sm' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="text-2xl font-black text-lavender-600 tracking-tighter cursor-pointer relative z-50" 
        >
          TJS<span className="text-brand-dark">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className={`text-sm font-bold transition-all relative py-2 px-1 group ${
                activeSection === item.id ? 'text-lavender-600' : 'text-brand-gray hover:text-lavender-600'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lavender-600 transition-transform duration-300 origin-left ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </a>
          ))}
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a 
            href="#" 
            className="hidden sm:flex items-center gap-2 border border-slate-200 bg-white px-5 py-2 rounded-xl text-sm font-bold text-brand-dark hover:border-lavender-500 hover:text-lavender-600 transition-all shadow-sm"
          >
            Resume
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-lavender-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-2xl ${isMenuOpen ? 'max-h-screen opacity-100 pt-24 pb-12' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className={`text-xl font-bold transition-colors w-full text-center py-2 ${
                activeSection === item.id ? 'text-lavender-600' : 'text-brand-gray hover:text-lavender-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#" 
            className="w-full text-center py-4 bg-lavender-600 text-white rounded-2xl font-bold shadow-lg shadow-lavender-500/20"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

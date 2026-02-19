
import React from 'react';

const Footer: React.FC = () => {
  const links = [
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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div 
              className="text-3xl font-black text-lavender-600 mb-4 tracking-tighter cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              TJS<span className="text-brand-dark">.</span>
            </div>
            <p className="text-slate-400 text-sm font-medium">Built with React, Tailwind & Passion.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 max-w-2xl">
            {links.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-sm font-bold text-slate-500 hover:text-lavender-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/tanshika-j-s-241a85296/" target="_blank" className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-xl hover:bg-lavender-50 hover:text-lavender-600 transition-all shadow-sm">
              in
            </a>
            <a href="https://github.com/tanshika225" className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-xl hover:bg-lavender-50 hover:text-lavender-600 transition-all shadow-sm">
              gh
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Tanshika J S Portfolio</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-lavender-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-lavender-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import profileImage from "../assets/profile.png";
const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Front-End Dev", "Cyber Enthusiast", "B.Tech IT Student", "Web Architect"];
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const tags = [
    { label: 'Full-Stack Developer', icon: '< >', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
    { label: 'UI/UX Designer', icon: '🎨', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
    { label: 'Security Analyst', icon: '🛡️', color: 'bg-teal-500/10 text-teal-600 border-teal-500/20' },
    { label: 'Problem Solver', icon: '🧠', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
    { label: 'React Engineer', icon: '⚛️', color: 'bg-pink-500/10 text-pink-600 border-pink-500/20' },
    { label: 'IT Enthusiast', icon: '💻', color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-32 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-lavender-200 bg-white text-xs font-bold text-lavender-600 mb-6 shadow-sm">
            Available for hire
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-2">
            Hello, I'm
          </h1>
          <h2 className="text-6xl lg:text-7xl font-extrabold text-gradient leading-[1.1] mb-6">
            Tanshika J S
          </h2>
          
          <div className="text-2xl font-semibold text-slate-400 mb-8 h-8 flex items-center">
            I'm a <span className="text-lavender-600 ml-2 font-bold">{typedText}</span>
            <span className="w-[3px] h-8 bg-lavender-600 ml-1 animate-pulse"></span>
          </div>

          <div className="flex flex-wrap gap-3 mb-10 max-w-xl">
            {tags.map((tag, idx) => (
              <div key={idx} className={`tag-pill border ${tag.color}`}>
                <span className="text-xs">{tag.icon}</span>
                {tag.label}
              </div>
            ))}
          </div>

          <p className="text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            Highly motivated Information Technology student specializing in modern web development and cybersecurity horizons.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="px-10 py-4 bg-lavender-600 text-white font-bold rounded-2xl transition-all hover:bg-lavender-700 shadow-lg shadow-lavender-500/20 flex items-center gap-3 group"
            >
              Get In Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-lavender-100">
              <div className="w-10 h-10 bg-lavender-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Completed</p>
                <p className="text-brand-dark font-bold text-xs">Major Projects</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-6">
            <a href="https://linkedin.com/in/tanshika-j-s-241a85296/" target="_blank" className="text-slate-400 hover:text-lavender-600 transition-colors flex items-center gap-2 font-bold text-sm">
              <span className="text-xl">🔗</span> LinkedIn
            </a>
            <a href="https://github.com/tanshika225" className="text-slate-400 hover:text-lavender-600 transition-colors flex items-center gap-2 font-bold text-sm">
              <span className="text-xl">🐙</span> GitHub
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10">
            <div className="w-64 h-80 md:w-[440px] md:h-[540px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              <img 
                src={profileImage}
                alt="Tanshika Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-600/20 to-transparent"></div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-lavender-200/25 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -top-6 -right-2 w-10 h-10 bg-lavender-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-6 w-16 h-16 bg-pink-400/10 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

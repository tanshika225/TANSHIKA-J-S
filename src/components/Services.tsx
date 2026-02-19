
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI UX Design',
      desc: 'Creating intuitive interfaces that focus on user psychology and modern design principles.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      ),
      active: false
    },
    {
      title: 'Web Development',
      desc: 'Building scalable web applications using React and Firebase with high performance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
      active: true
    },
    {
      title: 'Cybersecurity',
      desc: 'Analyzing vulnerabilities and implementing security protocols for safe digital experiences.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      active: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lavender-600 font-bold uppercase tracking-widest text-sm mb-4">Services</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark">Expertise Service! Let's check it out</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`p-10 rounded-4xl transition-all duration-300 border border-transparent ${
                service.active 
                ? 'bg-lavender-600 text-white shadow-2xl shadow-lavender-600/30 scale-105' 
                : 'bg-white text-brand-dark hover:shadow-xl hover:border-lavender-100'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.active ? 'bg-white/20' : 'bg-lavender-50 text-lavender-600'}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className={`leading-relaxed ${service.active ? 'text-white/80' : 'text-brand-gray'}`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

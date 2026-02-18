
import React from 'react';

const ExperienceTimeline: React.FC = () => {
  const steps = [
    {
      title: 'Analyze',
      desc: 'Understanding project requirements and security considerations.',
      icon: '🔍',
      color: 'bg-lavender-100 text-lavender-600'
    },
    {
      title: 'Design',
      desc: 'Architecting modern UI components and system security.',
      icon: '🎨',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Deploy',
      desc: 'Launching responsive and optimized digital solutions.',
      icon: '🚀',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lavender-600 font-bold uppercase tracking-widest text-sm mb-4">Process</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-20">My Working Process</h2>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-1/4 w-1/2 h-2 text-slate-100">
            <svg width="100%" height="24" viewBox="0 0 100 24" fill="none" className="overflow-visible">
                <path d="M0 12C20 12 30 12 50 12" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                <path d="M50 12C70 12 80 12 100 12" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center text-4xl mx-auto mb-8 shadow-sm transition-transform group-hover:scale-110`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{step.title}</h3>
              <p className="text-brand-gray max-w-xs mx-auto leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

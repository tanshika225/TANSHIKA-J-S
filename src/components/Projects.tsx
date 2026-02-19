
import React, { useState } from 'react';

const ProjectShowcase: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Mobile'];
  
  const projects = [
    {
      id: '01',
      title: 'Musify Streaming',
      category: 'Web App',
      icon: '🎵',
      color: 'bg-indigo-500',
      description: 'A responsive music platform built with React and integrated with modern APIs.'
    },
    {
      id: '02',
      title: 'SmartQCare Health',
      category: 'Web App',
      icon: '🏥',
      color: 'bg-emerald-500',
      description: 'Health management dashboard for patient records and appointment scheduling.'
    },
    {
      id: '03',
      title: 'Puzzle Brain Game',
      category: 'Mobile',
      icon: '🧩',
      color: 'bg-amber-500',
      description: 'An interactive cross-platform brain training app developed using Flutter.'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-lavender-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lavender-600 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-8">Digital Product Showcases</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-lavender-600 text-white shadow-lg shadow-lavender-500/20' 
                  : 'bg-white text-brand-gray hover:text-lavender-600 border border-slate-100 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
              <div className={`w-16 h-16 rounded-2xl ${project.color} bg-opacity-10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                {project.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{project.category}</p>
              <h4 className="text-2xl font-bold text-brand-dark mb-4">{project.title}</h4>
              <p className="text-brand-gray text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                <span className="text-xs font-bold text-lavender-600 cursor-pointer hover:underline">View Project</span>
                <div className="w-10 h-10 rounded-full bg-lavender-50 text-lavender-600 flex items-center justify-center font-bold">
                    →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

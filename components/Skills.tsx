
import React from 'react';

const Skills: React.FC = () => {
  const categories = [
    { title: 'Programming', items: ['Java', 'JavaScript', 'Python', 'C++'], icon: '💻', color: 'border-blue-100 bg-blue-50/30' },
    { title: 'Frontend', items: ['HTML5', 'CSS3', 'React JS', 'Tailwind'], icon: '⚛️', color: 'border-purple-100 bg-purple-50/30' },
    { title: 'Mobile', items: ['Flutter', 'Dart', 'React Native'], icon: '📱', color: 'border-pink-100 bg-pink-50/30' },
    { title: 'Backend', items: ['Firebase', 'SQL', 'PostgreSQL', 'Node.js'], icon: '🔥', color: 'border-emerald-100 bg-emerald-50/30' }
  ];

  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-lavender-200 bg-white text-xs font-bold text-lavender-600 mb-6">
            Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">Technical Toolbelt</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-lavender-500/5 ${cat.color}`}>
              <div className="text-3xl mb-6">{cat.icon}</div>
              <h4 className="text-lg font-bold text-brand-dark mb-4">{cat.title}</h4>
              <div className="space-y-3">
                {cat.items.map((skill, j) => (
                  <div key={j} className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-lavender-400"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

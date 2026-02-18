
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-lavender-200 bg-lavender-50 text-xs font-bold text-lavender-600 mb-6">
              My Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">
              Designing Solutions, <br /> Not Just Visuals
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              I am a motivated B.Tech (Information Technology) student at Panimalar Engineering College, expected to graduate in 2027. My passion lies in creating seamless web experiences with React while keeping a strong eye on cybersecurity principles.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-lavender-100 flex items-center justify-center text-lavender-600 shrink-0">
                  🎓
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Education</h4>
                  <p className="text-slate-500 text-sm">B.Tech IT - Panimalar Engineering College (2023-2027)</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Goal</h4>
                  <p className="text-slate-500 text-sm">To contribute to innovative IT roles and grow as a software professional.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 p-8 rounded-[2.5rem] bg-lavender-50 border border-lavender-100">
              <div>
                <div className="text-4xl font-black text-lavender-600 mb-1">2</div>
                <p className="text-brand-dark font-bold text-sm">Internships</p>
                <p className="text-slate-400 text-xs mt-1">Web Dev & Security</p>
              </div>
              <div>
                <div className="text-4xl font-black text-pink-500 mb-1">3</div>
                <p className="text-brand-dark font-bold text-sm">Major Projects</p>
                <p className="text-slate-400 text-xs mt-1">React & Mobile Apps</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="p-12 bg-lavender-50 rounded-[3rem] border-2 border-dashed border-lavender-200 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm mb-8">🚀</div>
              <h4 className="text-2xl font-bold text-brand-dark mb-4">Focused on Growth</h4>
              <p className="text-slate-500 leading-relaxed mb-8">
                Currently honing my skills in full-stack architecture and exploring advanced cybersecurity protocols to build resilient digital infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-lavender-600 border border-lavender-100">Agile</span>
                <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-lavender-600 border border-lavender-100">Problem Solving</span>
                <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-lavender-600 border border-lavender-100">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

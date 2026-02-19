
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from 'src/components/Hero.tsx';
import About from './components/About.tsx' ;
import Skills from 'src/components/Skills.tsx';
import ExperienceTimeline from './components/Experience.tsx';
import ProjectShowcase from 'src/components/Projects.tsx';
import Services from 'src/components/Services.tsx';
import Contact from './components/Contact.tsx';
import Footer from 'src/components/Footer.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120; // Adjusted offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-primary min-h-screen text-brand-dark selection:bg-lavender-200">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <ProjectShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

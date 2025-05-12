import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-grow">
          <HeroSection id="home" onVisible={() => setActiveSection('home')} />
          <AboutSection id="about" onVisible={() => setActiveSection('about')} />
          <ProjectsSection id="projects" onVisible={() => setActiveSection('projects')} />
          <ExperienceSection id="experience" onVisible={() => setActiveSection('experience')} />
          <SkillsSection id="skills" onVisible={() => setActiveSection('skills')} />
          <ContactSection id="contact" onVisible={() => setActiveSection('contact')} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'
import './App.css'
function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
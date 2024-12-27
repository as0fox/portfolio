import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/index.css';

const App = () => {
  return (
    <div className="container">
      <div className="page">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="logo" src="/images/logo.jpg" alt="logo" />
      </div>
      <div className="icon">
        <a href="#home" className="bold bord"><span>#</span>Home</a>
        <a href="#about" className="bold bord"><span>#</span>About</a>
        <a href="#skills" className="bold bord"><span>#</span>Skills</a>
        <a href="#projects" className="bold bord"><span>#</span>Projects</a>
        <a href="#contact" className="bold bord"><span>#</span>Contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;
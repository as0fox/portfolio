import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <div className="head2">
        <img src={image} alt={title} className="img-websit" />
      </div>
      <div className="body">
        <h1 className="bold">{title}</h1>
        <pre>{description}</pre>
        <button className="btn">
          <a href={link} className="a">Visit</a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "/images/burger_website.png",
      title: "Feane website",
      description: "My first project in \nOrange Coding Acadimy\n( Html , CSS )",
      link: "https://as0fox.github.io/burger.github.io/"
    },
    // Add other projects
  ];

  return (
    <section className="section3" id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;

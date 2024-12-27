import React from 'react';

const AboutCard = ({ image, title, description, buttonLink, buttonText = "about" }) => {
  return (
    <div className="card" style={{ height: '50%' }}>
      <div className="head">
        <img src={image} alt="" className="img-head" />
      </div>
      <div className="body">
        <h1 className="bold">{title}</h1>
        <pre>{description}</pre>
        <button className="btn">
          <a href={buttonLink} className="a">{buttonText}</a>
        </button>
      </div>
    </div>
  );
};

const About = () => {
  const aboutCards = [
    {
      image: "/images/icons8-university-64.png",
      title: "TTU",
      description: "studied at \nTafila Technical University.",
      buttonLink: "https://www.ttu.edu.jo"
    },
    {
      image: "/images/icons8-2-64.png",
      title: "Ranking",
      description: "ranking second in my class \nwith achieving very good",
      buttonLink: "#"
    },
    {
      image: "/images/icons8-graduated-100.png",
      title: "Graduated",
      description: "with a Bachelor's degree\nand graduated in 6/2024.",
      buttonLink: "#"
    },
    {
      image: "/images/icons8-android-100.png",
      title: "CSD",
      description: "I studied \nsmart device computing.",
      buttonLink: "https://www.ttu.edu.jo/en/college-of-information-technology-and-communication/department-of-information-technology/"
    }
  ];

  return (
    <section className="section" id="about">
      {aboutCards.map((card, index) => (
        <AboutCard key={index} {...card} />
      ))}
    </section>
  );
};

export default About;

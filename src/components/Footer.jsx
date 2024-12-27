import React from 'react';

const FooterCard = ({ icon, title, link, description }) => {
  return (
    <div className="card-footer">
      <a href={link} style={{ color: 'black', fontWeight: 'bold' }}>
        <img className="github" src={icon} alt={title} />
        {title}
      </a>
      <h4>{description}</h4>
    </div>
  );
};

const Footer = () => {
  const footerLinks = [
    {
      icon: "/images/icons8-github-logo-100.png",
      title: "GitHub",
      link: "https://github.com/as0fox?tab=repositories",
      description: "See my projects on github"
    },
    // Add other footer links
  ];

  return (
    <footer>
      <div className="cards-footer" id="contact">
        {footerLinks.map((link, index) => (
          <FooterCard key={index} {...link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
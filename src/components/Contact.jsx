import { Github, Mail, Linkedin, Instagram } from 'lucide-react';

function Contact() {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/as0fox",
      description: "Check out my code repositories"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:ahmad.a.alfararjeh@gmail.com",
      description: "Get in touch via email"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmad-alfararjeh-39404b245",
      description: "Connect with me professionally"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/a0j0a",
      description: "Follow my journey"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Contact<span className="text-yellow-400">.</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Let's connect! Feel free to reach out through any of these platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-white/10 group-hover:bg-yellow-400/20 transition-colors">
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">
                {link.label}
              </h3>
              <p className="text-white/60">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
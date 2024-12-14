import { ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Feane Website",
      description: "A modern restaurant website built with React and Tailwind CSS",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
      link: "https://as0fox.github.io/burger.github.io/"
    },
    {
      title: "Airbnb Clone",
      description: "A pixel-perfect clone of Airbnb's user interface",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
      link: "https://as0fox.github.io/Airbnb_Websit.github.io/"
    },
    {
      title: "FoxShop",
      description: "An innovative bookshop with stunning animations",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
      link: "https://as0fox.github.io/BookShop.github.io/"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Projects<span className="text-yellow-400">.</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          A selection of my recent work and personal projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <span className="text-yellow-400 flex items-center gap-2">
                  View Project <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
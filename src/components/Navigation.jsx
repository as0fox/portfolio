import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';

function Navigation({ activeSection, setActiveSection }) {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold">
            Portfolio<span className="text-yellow-400">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider hover:text-yellow-400 transition-colors ${
                  activeSection === item ? 'text-yellow-400' : 'text-white/80'
                }`}
                onClick={() => setActiveSection(item)}
              >
                #{item}
              </a>
            ))}
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired
};

export default Navigation;
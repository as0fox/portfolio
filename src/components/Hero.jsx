function Hero() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Creative
            <br />
            Developer<span className="text-yellow-400">.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-lg">
            Full-stack developer specializing in building exceptional digital experiences.
            Currently focused on building responsive full-stack web applications.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors"
          >
            Get in touch
          </a>
        </div>
  
        <div className="flex-1 relative">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Developer"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
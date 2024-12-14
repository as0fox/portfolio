function About() {
  const achievements = [
    {
      icon: "🎓",
      title: "TTU Graduate",
      description: "Bachelor's degree in Smart Device Computing"
    },
    {
      icon: "🏆",
      title: "Top Performer",
      description: "Ranked second in class with distinction"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Led multiple successful tech projects"
    },
    {
      icon: "🚀",
      title: "Full Stack",
      description: "Specialized in modern web technologies"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">About Me<span className="text-yellow-400">.</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          A passionate developer with a strong foundation in computer science and a keen interest in creating innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors group"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
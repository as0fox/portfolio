function Skills() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Skills<span className="text-yellow-400">.</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          A comprehensive toolkit that enables me to build complete, scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-white/80">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
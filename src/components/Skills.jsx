function Skills() {
  const skills = [
    { name: "C++", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "AWS", level: "Beginner" },
    { name: "Docker", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold">
              {skill.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
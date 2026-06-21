import React from "react";

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

return ( <section
   id="skills"
   className="max-w-6xl mx-auto px-8 py-16"
 > <h2 className="text-4xl font-bold mb-12">
Skills </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {skills.map((skill, index) => (
  <div
    key={skill.name}
    className="
      horizontal-float
      bg-white/5
      backdrop-blur-md
      p-3
      rounded-xl
      border
      border-white/10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:scale-105
      hover:border-cyan-400/50
      hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    "
    style={{
      animationDelay: `${index * 0.3}s`,
    }}
  >
        <h3 className="text-2xl font-semibold">
          {skill.name}
        </h3>

        <p className="text-gray-400 mt-3">
          {skill.level}
        </p>
      </div>
    ))}
  </div>
</section>

);
}

export default Skills;

// components/Skills.jsx

import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Bootstrap",
    "GitHub",
  ];

  return (
    <section className="section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
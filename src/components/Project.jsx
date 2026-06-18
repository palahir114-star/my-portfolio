// components/Projects.jsx

import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Online Finance Tracker",
      desc: "Finance tracking website using HTML, CSS, and JavaScript.",
    },
    {
      title: "E-Commerce Website",
      desc: "Responsive shopping website with cart functionality.",
    },
    {
      title: "Protfolio",
      desc: "Personal portfolio project hosted on GitHub.",
      
    },
  ];

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

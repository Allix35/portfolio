
import React from "react";
import ProjectCard from "../components/Cards";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Mes Réalisations</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

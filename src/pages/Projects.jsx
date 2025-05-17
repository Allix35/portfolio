import React from "react";
import ProjectCard from "../components/Cards";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-section py-5 bg-light" id="projects">
      <div className="container">
        <h2 className="text-center mb-5">Mes Réalisations</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


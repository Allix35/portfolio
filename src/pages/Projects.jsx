import ProjectCard from "../components/Cards";
import projects from "../data/projects";

// Projects component definition
const Projects = () => {
  return (
    // Projects section contain
    <section className="projects-section">

      <h2>Mes Réalisations</h2>

      {/* Projects grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          // `key` required for unique identification of elments in a list
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;


import "./Projects.css";

import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="container">

        <h2 className="section-title">
          Projects
        </h2>

        <div className="projects-grid">

          {projectsData.map((project, index) => (

            <div
              key={index}
              className="project-card"
            >

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((tech, i) => (

                  <span key={i}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
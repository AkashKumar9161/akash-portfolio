import "./ExperienceCard.css";

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">

      <span className="experience-year">
        {experience.year}
      </span>

      <h3>
        {experience.role}
      </h3>

      <h4>
        {experience.company}
      </h4>

      <p>
        {experience.description}
      </p>

      <div className="experience-tech">

        {experience.technologies.map((tech) => (

          <span key={tech}>
            {tech}
          </span>

        ))}

      </div>

    </div>
  );
}

export default ExperienceCard;
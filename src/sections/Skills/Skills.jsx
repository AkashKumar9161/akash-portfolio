import "./Skills.css";
import skillsData from "../../data/skillsData";


function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        <h2 className="section-title">
          My Skills
        </h2>

        <div className="skills-grid">

          {skillsData.map((category) => (

            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill) => (

                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
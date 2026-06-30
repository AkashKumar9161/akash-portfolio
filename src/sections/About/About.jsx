import "./About.css";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <h2 className="section-title">
          {aboutData.title}
        </h2>

        <p className="about-description">
          {aboutData.description}
        </p>

        <div className="about-cards">
          {aboutData.highlights.map((item, index) => (
            <div className="about-card" key={index}>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
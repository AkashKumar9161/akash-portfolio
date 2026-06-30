import "./Experience.css";

import experienceData from "../../data/experienceData";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

function Experience() {

    return (

        <section
            id="experience"
            className="section"
        >

            <div className="container">

                <h2 className="section-title">

                    Experience

                </h2>

                <div className="experience-grid">

                    {experienceData.map((experience) => (

                        <ExperienceCard

                            key={experience.id}

                            experience={experience}

                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Experience;
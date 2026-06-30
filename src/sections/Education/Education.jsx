import "./Education.css";

import educationData from "../../data/educationData";

function Education() {

    return (

        <section
            id="education"
            className="section"
        >

            <div className="container">

                <h2 className="section-title">

                    Education

                </h2>

                <div className="education-grid">

                    {educationData.map((item) => (

                        <div
                            key={item.id}
                            className="education-card"
                        >

                            <span>

                                {item.duration}

                            </span>

                            <h3>

                                {item.degree}

                            </h3>

                            <h4>

                                {item.institute}

                            </h4>

                            <p>

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Education;
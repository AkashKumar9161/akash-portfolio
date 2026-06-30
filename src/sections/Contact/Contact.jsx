import "./Contact.css";

import contactData from "../../data/contactData";

function Contact() {

    return (

        <section
            id="contact"
            className="section"
        >

            <div className="container">

                <h2 className="section-title">

                    Contact Me

                </h2>

                <div className="contact-card">

                    <h3>

                        Let's Build Something Together 🚀

                    </h3>

                    <p>

                        Feel free to reach out for freelance work,
                        internships or full-time opportunities.

                    </p>

                    <div className="contact-info">

                        <p>

                            📧 {contactData.email}

                        </p>

                        <p>

                            📞 {contactData.phone}

                        </p>

                        <p>

                            📍 {contactData.location}

                        </p>

                    </div>

                    <div className="contact-links">

                        <a
                            href={contactData.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href={contactData.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;
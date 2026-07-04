// import "./Contact.css";
// import { useState } from "react";
// import contactData from "../../data/contactData";

// function Contact() {

//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {

//     event.preventDefault();

//     setLoading(true);

//     setResult("");

//     const formData = new FormData(event.target);

//     // 👇 Paste your Web3Forms Access Key here
//     formData.append("access_key",  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

//     formData.append("subject", "🚀 New Portfolio Contact");

//     formData.append("from_name", formData.get("name"));

//     formData.append("replyto", formData.get("email"));

//     formData.append("botcheck", "");

//     const response = await fetch(
//       "https://api.web3forms.com/submit",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await response.json();

//     if (data.success) {

//       setResult("✅ Thank you! Your message has been sent successfully.");

//       event.target.reset();

//     } else {

//       setResult("❌ Something went wrong. Please try again.");

//     }

//     setLoading(false);

//   };

//   return (

//     <section
//       id="contact"
//       className="section"
//     >

//       <div className="container">

//         <h2 className="section-title">

//           Contact Me

//         </h2>

//         <div className="contact-card">

//           <h3>

//             Let's Build Something Together 🚀

//           </h3>

//           <p>

//             Feel free to reach out for freelance work,
//             internships or full-time opportunities.

//           </p>

//           <form
//             className="contact-form"
//             onSubmit={onSubmit}
//           >

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               required
//             />

//             <textarea
//               name="message"
//               rows="6"
//               placeholder="Write your message..."
//               required
//             />

//             <button type="submit">

//               {loading ? "Sending..." : "Send Message"}

//             </button>

//           </form>

//           {result &&

//             <p className="result">

//               {result}

//             </p>

//           }

//           <div className="contact-info">

//             <p>📧 {contactData.email}</p>

//             <p>📞 {contactData.phone}</p>

//             <p>📍 {contactData.location}</p>

//           </div>

//           <div className="contact-links">

//             <a
//               href={contactData.github}
//               target="_blank"
//               rel="noreferrer"
//             >
//               GitHub
//             </a>

//             <a
//               href={contactData.linkedin}
//               target="_blank"
//               rel="noreferrer"
//             >
//               LinkedIn
//             </a>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Contact;


import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import contactData from "../../data/contactData";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const form = event.target;

    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      // 1. Send email to you
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        // "service_vfbhb1m",
        // "template_5fkc1gq",
        // templateParams,
        // "J1manuArApKPO_p2_"
      );

      // 2. Send auto reply to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          // "service_vfbhb1m",
          // "template_bmsnm2i",
          // templateParams,
          // "J1manuArApKPO_p2_"
      );

      setResult("✅ Thank you! Your message has been sent successfully.");

      form.reset();
    } catch (error) {
      console.error(error);
      setResult("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section">
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

          <form
            className="contact-form"
            onSubmit={onSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />

            <button type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {result && (
            <p className="result">
              {result}
            </p>
          )}

          <div className="contact-info">

            <p>📧 {contactData.email}</p>

            <p>📞 {contactData.phone}</p>

            <p>📍 {contactData.location}</p>

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
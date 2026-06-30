import "./Hero.css";

import Button from "../../components/common/Button/Button";
import SocialIcon from "../../components/common/SocialIcon/SocialIcon";

import heroData from "../../data/heroData";
import socialLinks from "../../data/socialLinks";

import profileImage from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-content">

        {/* Left Side */}
        <div className="hero-left">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>{heroData.name}</h1>

          <h2>{heroData.title}</h2>

          <p className="hero-description">
            {heroData.description}
          </p>

          <div className="hero-buttons">

            <Button
              href="/resume.pdf"
              download="Akash_Kumar_Resume.pdf"
            >
              Download Resume
            </Button>

            <Button
              variant="secondary"
              href="#contact"
            >
              Contact Me
            </Button>

          </div>

          <div className="hero-social">

            {socialLinks.map((item, index) => (
              <SocialIcon
                key={index}
                href={item.url}
                icon={item.icon}
              />
            ))}

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-right">

          <div className="profile-placeholder">

            <img
              src={profileImage}
              alt="Akash Kumar"
              className="profile-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
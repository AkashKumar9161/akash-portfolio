import "./SocialIcon.css";

function SocialIcon({ href, icon }) {
    return (
        <a
            className="social-icon"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {icon}
        </a>
    );
}

export default SocialIcon;
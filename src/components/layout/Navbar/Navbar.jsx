import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";
import NavLinks from "./NavLinks";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-content">

        <div className="logo">
          <img src={logo} alt="Akash Logo" className="logo-img" />
        </div>
        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <nav>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <NavLinks closeMenu={() => setMenuOpen(false)} />
          </ul>
        </nav>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
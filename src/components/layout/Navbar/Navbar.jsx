import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// import Logo from "../../common/Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">

        <div className="logo">
          Akash.
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>
            <NavLinks />
          </ul>
        </nav>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
import { Link } from "react-scroll";
import navigation from "../../../data/navigation";

function NavLinks({ closeMenu }) {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.id}>
          <Link
            to={item.id}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
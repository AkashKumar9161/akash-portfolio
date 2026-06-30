import navigation from "../../../data/navigation";
function NavLinks() {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
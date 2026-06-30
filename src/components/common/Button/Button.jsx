import "./Button.css";

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  href,
  target,
  rel,
  download,
}) {

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={`btn btn-${variant}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
function Footer() {
  return (
    <footer className="section">
      <div className="container">

        <hr />

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#64748b",
          }}
        >
          © {new Date().getFullYear()} Akash Kumar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
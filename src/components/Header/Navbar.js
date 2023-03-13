import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import logoDark from "../../assets/images/logo-dark.webp";
import logoLight from "../../assets/images/logo.webp";

const Navbar = ({ theme, openNav, onClick }) => {
  const [logo, setLogo] = useState(null);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  useEffect(() => {
    const defaultLogo = (
      <img
        src={logoLight}
        alt={title}
        width="124"
        height="32"
        className="logo__light"
      />
    );
    const secondaryLogo = (
      <img
        src={logoDark}
        alt={title}
        width="124"
        height="32"
        className="logo__dark"
      />
    );

    if (theme === "light") {
      setLogo(secondaryLogo);
    } else {
      setLogo(defaultLogo);
    }
  }, [theme, title]);

  return (
    <nav>
      <div className="container px-7 max-w-full flex items-center justify-between gap-4 py-5">
        <Link to="/" className="navbar__brand">
          {logo}
        </Link>
        <button
          type="button"
          className={`menu__button ${theme === "light" ? "light" : "dark"}`}
          onClick={onClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

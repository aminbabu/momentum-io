import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { useSelector } from "react-redux";
import logoDark from "../../assets/images/logo-dark.webp";
import logoLight from "../../assets/images/logo.webp";

const Navbar = ({ openNav, onClick }) => {
  const { theme } = useSelector((state) => state.siteConf);
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

  const logo =
    theme === "dark" ? (
      <img
        src={logoLight}
        alt={title}
        width="124"
        height="32"
        className="logo__light"
      />
    ) : (
      <img
        src={logoDark}
        alt={title}
        width="124"
        height="32"
        className="logo__dark"
      />
    );

  return (
    <nav>
      <div className="container px-7 max-w-full flex items-center justify-between gap-4 py-5">
        <Link to="/" className="navbar__brand">
          {logo}
        </Link>
        <button
          type="button"
          className={`menu__button ${
            theme === "dark" || openNav ? "dark" : "light"
          }`}
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

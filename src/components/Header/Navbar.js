import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import logoDark from "../../assets/images/logo-dark.webp";
import logoLight from "../../assets/images/logo.webp";

const Navbar = ({ isDark, scrollPosition, openNav, onClick }) => {
  const [theme, setTheme] = useState("dark");
  const [logo, setLogo] = useState();

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

  // sticky header
  useEffect(() => {
    let theme;
    if (isDark) {
      theme = isDark;
    } else {
      theme = scrollPosition > 0 ? "dark" : "light";
    }

    setTheme(theme);
  }, [theme, isDark, scrollPosition]);

  // toggle logo
  useEffect(() => {
    const icon =
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

    setLogo(icon);
  }, [theme, title]);

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

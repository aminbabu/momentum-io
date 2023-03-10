import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import data from "../../storage/header.json";
import SocialMedia from "../SocialMedia";

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState("");
  const { pathname } = useLocation();
  const { navLinks } = data.header;

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="navbar__menu__wrapper">
      <div className="navbar__menu">
        <ul className="reboot__list navbar__nav">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`nav__link ${
                  activeLink === link.to ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <SocialMedia className="justify-end" />
      </div>
    </nav>
  );
};

export default NavMenu;

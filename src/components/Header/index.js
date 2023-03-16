import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const isBrowser = typeof window !== "undefined";

const Header = ({ theme, scrollPosition }) => {
  const [openNav, setOpenNav] = useState(false);

  const dynamicClassName = `${scrollPosition > 0 ? "floating" : ""} ${
    openNav ? "active" : ""
  }`;

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    if (!isBrowser) return;

    if (openNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openNav]);

  return (
    <header className={`header__main ${dynamicClassName}`}>
      <Navbar theme={theme} openNav={openNav} onClick={handleClick} />
      <NavMenu />
    </header>
  );
};

export default Header;

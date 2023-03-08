import React, { useState } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Header = ({ isDark, scrollPosition }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className={`header__main ${scrollPosition > 0 ? "floating" : ""} ${
        openNav ? "active" : ""
      }`}
    >
      <Navbar
        isDark={isDark}
        scrollPosition={scrollPosition}
        openNav={openNav}
        onClick={() => setOpenNav(!openNav)}
      />
      <NavMenu />
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Header = ({ theme, scrollPosition }) => {
  const [openNav, setOpenNav] = useState(false);

  const dynamicClassName = `${scrollPosition > 0 ? "floating" : ""} ${
    openNav ? "active" : ""
  }`;

  return (
    <header className={`header__main ${dynamicClassName}`}>
      <Navbar
        theme={theme}
        openNav={openNav}
        onClick={() => setOpenNav(!openNav)}
      />
      <NavMenu />
    </header>
  );
};

export default Header;

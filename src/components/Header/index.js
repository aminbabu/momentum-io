import React, { useState } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Header = ({ theme, scrollPosition }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className={`header__main ${scrollPosition > 0 ? "floating" : ""} ${
        openNav ? "active" : ""
      }`}
    >
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

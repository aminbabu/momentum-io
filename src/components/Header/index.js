import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Header = () => {
  const { scrollPosition } = useSelector((state) => state.siteConf);
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className={`header__main ${scrollPosition > 0 ? "floating" : ""} ${
        openNav ? "active" : ""
      }`}
    >
      <Navbar openNav={openNav} onClick={() => setOpenNav(!openNav)} />
      <NavMenu />
    </header>
  );
};

export default Header;

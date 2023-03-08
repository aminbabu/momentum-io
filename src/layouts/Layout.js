import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Lauout = ({ isDark, children }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header isDark={isDark} scrollPosition={scrollTop} />
      <main className="main__sections">{children}</main>
      <Footer />
    </div>
  );
};

export default Lauout;

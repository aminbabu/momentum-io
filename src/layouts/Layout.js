import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const isBrowser = typeof window !== "undefined";

const Lauout = ({ theme, children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isBrowser) {
      // your code here
      const handleScroll = (event) => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="App">
      <Header theme={theme} scrollPosition={scrollPosition} />
      <main className="main__sections">{children}</main>
      <Footer />
    </div>
  );
};

export default Lauout;

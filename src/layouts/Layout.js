import AOS from "aos";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const isBrowser = typeof window !== "undefined";

const Lauout = ({ theme, footerClass, children }) => {
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header theme={theme} scrollPosition={scrollPosition} />
      <main className="main__sections">{children}</main>
      <div className={footerClass}>
        <Footer />
      </div>
    </div>
  );
};

export default Lauout;

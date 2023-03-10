import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { changeScrollPosition } from "../redux/features/sideConf/creators";

const isBrowser = typeof window !== "undefined";

const Lauout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isBrowser) {
      // your code here
      const handleScroll = (event) => {
        dispatch(changeScrollPosition(window.scrollY));
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main className="main__sections">{children}</main>
      <Footer />
    </div>
  );
};

export default Lauout;

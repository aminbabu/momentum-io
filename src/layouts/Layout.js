import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getScrolledPosition } from "../redux/features/settingsSlice/settingsSlice";

const Lauout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = (event) => {
      const position = window.scrollY;

      dispatch(getScrolledPosition(position));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

import { Splide } from "@splidejs/react-splide";
import React from "react";

const Slider = ({ options, label, children }) => {
  return (
    <Splide options={options} aria-label={label}>
      {children}
    </Splide>
  );
};

export default Slider;

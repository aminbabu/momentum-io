import { Splide } from "@splidejs/react-splide";
import React from "react";

const Slider = ({ options, label, className, children }) => {
  return (
    <Splide className={className} options={options} aria-label={label}>
      {children}
    </Splide>
  );
};

export default Slider;

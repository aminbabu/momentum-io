import React from "react";

const Button = ({ type, className, children, handleEvent }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn ${className}`}
      onClick={handleEvent}
    >
      {children}
    </button>
  );
};

export default Button;

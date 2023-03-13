import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "gatsby";
import React from "react";
import tesmimonialImg from "../assets/images/testimonial-img.svg";

const TestimonialCard = ({ testimonial }) => {
  const { title, designation, company, link } = testimonial || {};

  return (
    <SplideSlide>
      <Link to={link} className="testimonial__item">
        <img src={tesmimonialImg} alt={title} width="100" height="110" />
        <h4 className="testimonial__title">" {title} "</h4>
        <p className="testimonial__designation">{designation}</p>
        <p className="testimonial__company">{company}</p>
      </Link>
    </SplideSlide>
  );
};

export default TestimonialCard;

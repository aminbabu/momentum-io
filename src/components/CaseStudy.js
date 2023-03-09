import { Link } from "gatsby";
import React from "react";
import img from "../assets/images/case-study-hero-bg.webp";

const CaseStudy = () => {
  return (
    <article className="article__item">
      <Link to="#" className="article__img">
        <img src={img} alt="" width="1200" height="720" />
      </Link>
      <h4 className="article__title">
        <div className="industries">
          <span>Consumer Products</span>
          <span>Financial Services</span>
        </div>
        <Link to="#">
          <span className="brand__name">Brokers.io</span>{" "}
          <span className="title__text">
            - Creating the Future of Accessible Crypto
          </span>
        </Link>
      </h4>
      <ul className="article__tags">
        <li>
          <Link to="#" className="btn btn__sm">
            Research
          </Link>
        </li>
        <li>
          <Link to="#" className="btn btn__sm">
            Strategy
          </Link>
        </li>
        <li>
          <Link to="#" className="btn btn__sm">
            Design
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default CaseStudy;

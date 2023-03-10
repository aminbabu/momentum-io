import React, { useState } from "react";
import CaseStudy from "../components/CaseStudy";
import Layout from "../layouts/Layout";
import data from "../storage/work.json";

const WorkPage = () => {
  const [dropdown, setDropdown] = useState("ALL");
  const [articleType, setArticleType] = useState("card");

  const handleDropdown = (value) => {
    setDropdown(value);
  };

  const handleArticleType = (value) => {
    setArticleType(value);
  };

  return (
    <Layout>
      <section className="section__header">
        <div className="container">
          <div className="work__header__content">
            <div className="left">
              <h1 className="title__1">
                Improving Products Across{" "}
                <span className="text-red">All Industries</span>
              </h1>
            </div>
            <div className="right">
              <p className="text-lg md:text-xl lg:text-2xl">
                We are dreamers and builders focused on improving the human
                relationship with technology. Our creative and technical
                expertise in all industries has earned us extensive experience
                and knowledge from around the globe, which we leverage to build
                your vision and accomplish your goals together.
              </p>
            </div>
          </div>

          <div className="work__filters__wrapper">
            <div className="left">
              Insdustry:
              <div className="dropdown__wrapper">
                <button type="button" className="dropdown__toggle">
                  {dropdown}
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                  </svg>
                </button>
                <ul className="dropdown__list">
                  {data.industries.map((industry) => (
                    <li key={industry}>
                      <button
                        type="button"
                        className="dropdown__item"
                        onClick={() => handleDropdown(industry)}
                      >
                        {industry}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <nav className="navtabs__wrapper">
                <button
                  type="button"
                  className={`navtabs__toggle ${
                    articleType === "card" ? "active" : ""
                  }`}
                  onClick={() => handleArticleType("card")}
                >
                  Card
                </button>
                <button
                  type="button"
                  className={`navtabs__toggle ${
                    articleType === "list" ? "active" : ""
                  }`}
                  onClick={() => handleArticleType("list")}
                >
                  List
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="flex justify-end">
            <div
              className={`case__studies__wrapper ${
                articleType === "list" ? "article__list" : ""
              }`}
            >
              <CaseStudy />
              <CaseStudy />
              <CaseStudy />
              <CaseStudy />
              <CaseStudy />
              <CaseStudy />
              <CaseStudy />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkPage;

export const Head = () => <title>Work</title>;

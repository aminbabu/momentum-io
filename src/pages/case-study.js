import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import caseStudyImg1 from "../assets/images/case-study-2.webp";
import caseStudyImg2 from "../assets/images/case-study-3.png";
import caseStudyImg3 from "../assets/images/case-study-4.webp";
import caseStudyBgSm from "../assets/images/case-study-hero-bg-sm.webp";
import caseStudyBg from "../assets/images/case-study-hero-bg.webp";
import bannerImg from "../assets/images/case-study-pic-1.webp";
import workImg1 from "../assets/images/other-work-1.png";
import workImg2 from "../assets/images/other-work-2.png";
import workImg3 from "../assets/images/other-work-3.png";
import workImg4 from "../assets/images/other-work-4.png";
import researchIcon from "../assets/images/strategy-research-icon-1.svg";
import strategyIcon from "../assets/images/strategy-research-icon.svg";
import researchImg from "../assets/images/strategy-research-pic.webp";
import Layout from "../layouts/Layout";

const CaseStudyPage = () => {
  const [heroBg, setHeroBg] = useState(caseStudyBg);

  useEffect(() => {
    const handlgeResize = () => {
      const screen = window.innerWidth;

      if (screen <= 768) return setHeroBg(caseStudyBgSm);

      setHeroBg(caseStudyBg);
    };

    handlgeResize();

    window.addEventListener("resize", handlgeResize);
  }, []);

  return (
    <Layout>
      <section className="section__header case__study__header relative">
        <div
          className="bg__holder case__study__bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 xl:col-span-6">
              <p className="case__study__meta">Brokers.io</p>
              <h1 className="title__1">
                Creating the Future of Accessible Crypto
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section case__study__overview">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-between">
            <div className="basis-full lg:basis-5/12">
              <h2 className="case__overview__title">Overview</h2>
              <p>
                Brokers.io is a crypto-exchange terminal that provides users an
                integrated platform with access to over ten exchanges, 24/7
                expert guidance from private brokers, and the best
                cryptocurrency deals on the market. They came to Momentum to
                design the retail desktop and mobile experience, capitalizing on
                our UX strategy, research, and design expertise.
              </p>
            </div>
            <div className="basis-full lg:basis-1/2">
              <h2 className="case__overview__title">Services</h2>
              <div className="case__overview__button__group">
                <Link to="#" className="btn btn__sm rounded-full">
                  Research
                </Link>
                <Link to="#" className="btn btn__sm rounded-full">
                  Strategy
                </Link>
                <Link to="#" className="btn btn__sm rounded-full">
                  Dedisn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section case__study__figure light">
        <div className="container">
          <img src={bannerImg} alt="case study" width="1200" height="760" />
        </div>
      </section>

      <section className="section momentum__challenge">
        <div className="container">
          <div className="flex justify-center">
            <div className="basis-11/12">
              <p className="section__tagline text-center">Challenge</p>
              <p className="text-2xl text-center">
                Momentum was challenged to create a platform for individual day
                traders that leveraged automated trading bots and intuitively
                jumped from different exchanges to achieve different goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section strategy__research">
        <div className="container">
          <div className="flex flex-wrap gap-6 justify-between items-center">
            <div className="basis-full lg:basis-1/2 xl:basis-5/12">
              <div className="strategy__research__icon">
                <img src={strategyIcon} alt="icon" width="80" height="80" />
              </div>
              <h2 className="title__3">
                Combining Strategy and Research to Drive Product Decisions
              </h2>
              <p>
                In our approach to help inform our design decisions, we
                conducted a competitive review, user interviews, client
                documentation immersion, and a two-week workshop which included
                a journey map, user persona, and prioritization exercises.
              </p>
              <div className="strategy__research__wrapper">
                <div className="strateygy__research__item">
                  <p className="section__tagline">Research</p>
                  <p>Ethnographic User Study</p>
                </div>
                <div className="strateygy__research__item">
                  <p className="section__tagline">Strategy</p>
                  <p>Requirements Definition</p>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-1/2">
              <div className="section__img">
                <img
                  src={researchImg}
                  alt="STRATEGY & RESEARCH"
                  width="580"
                  height="616"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section momentum__challenge momentum__challenge__colored">
        <div className="container">
          <div className="flex justify-center">
            <div className="basis-11/12">
              <p className="section__tagline text-center">Challenge</p>
              <p className="text-2xl text-center">
                “Momentum produced a mix of strategic insights, very
                collaborative workshopping that helped deliver UX & UI that
                inspires the next generation of forward thinking c-suite
                audience looking to add value to their organization.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section strategy__research">
        <div className="container">
          <div className="flex justify-center">
            <div className="basis-10/12">
              <div className="strategy__research__icon">
                <img src={researchIcon} alt="icon" width="80" height="80" />
              </div>
              <h2 className="title__3">Bridging the Gaps</h2>
              <p>
                We designed a platform that bridges the gaps in managing
                multiple cryptocurrency accounts in different exchanges that
                utilize user-centered design principles and a robust visual
                design system to ensure swift and assisted task flows for
                effective results for the users. We focused on visual context
                cues to guide the user given the high amount of information
                displayed.
              </p>
              <div className="strategy__research__wrapper">
                <div className="strateygy__research__item">
                  <p className="section__tagline">Design</p>
                  <p>50+ High Fidelity Designs</p>
                  <p>Wireframe Information Annotation</p>
                  <p>Clickable Prototype</p>
                  <p>Visual Design Language</p>
                  <p>Desktop and Mobile Design</p>
                  <p>Design System</p>
                  <p>UI Design Sprint Planning</p>
                  <p>UI Design and Prototyping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case__study__figure">
        <div className="container">
          <img src={caseStudyImg1} alt="case study" width="1200" height="760" />
          <img src={caseStudyImg2} alt="case study" width="1200" height="760" />
          <img src={caseStudyImg3} alt="case study" width="1200" height="760" />
        </div>
      </section>

      <section className="section pb-0 case__study__controls">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8">
            <div className="text-end">
              <p className="section__tagline">Previous</p>
              <Link to="#" className="page__control page__prev">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
                </svg>
                <span className="page__control__text">Piplsay</span>
              </Link>
            </div>
            <div>
              <p className="section__tagline">Next</p>
              <Link to="#" className="page__control page__next">
                <span className="page__control__text">Coalfire</span>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section other__work">
        <div className="container">
          <h2 className="title__2">Other Work</h2>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            <Link to="#" className="other__work__item">
              <img src={workImg1} alt="Other Work" width="250" height="260" />
            </Link>
            <Link to="#" className="other__work__item">
              <img src={workImg2} alt="Other Work" width="250" height="260" />
            </Link>
            <Link to="#" className="other__work__item">
              <img src={workImg3} alt="Other Work" width="250" height="260" />
            </Link>
            <Link to="#" className="other__work__item">
              <img src={workImg4} alt="Other Work" width="250" height="260" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyPage;

export const Head = () => <title>Single Case Study Page</title>;

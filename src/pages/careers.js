import React from "react";
import heroBG from "../assets/images/career-hero-bg.svg";
import heroIMG from "../assets/images/career-hero-pic.webp";
import findMomentumBG from "../assets/images/find-moment-bg.svg";
import findMomentumImg1 from "../assets/images/insights-pic-1.webp";
import findMomentumImg2 from "../assets/images/insights-pic-2.png";
import findMomentumImg3 from "../assets/images/insights-pic-3.png";
import findMomentumImg4 from "../assets/images/insights-pic-4.png";
import icon1 from "../assets/images/our-values-icon-1.svg";
import icon2 from "../assets/images/our-values-icon-2.svg";
import icon3 from "../assets/images/our-values-icon-3.svg";
import icon4 from "../assets/images/our-values-icon-4.svg";
import Layout from "../layouts/Layout";

const CareersPage = () => {
  return (
    <Layout>
      <section className="section__header career__hero relative">
        <div
          className="bg__holder career__hero__bg"
          style={{ backgroundImage: `url(${heroBG})` }}
        ></div>
        <div
          className="bg__holder career__hero__img"
          style={{ backgroundImage: `url(${heroIMG})` }}
        ></div>
        <div className="container">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-8 xl:col-span-7">
              <h1 className="title__1">
                Collaborate, Create, and Grow Your Career
              </h1>
              <p>
                There’s no shortage of passion and diversity here at Momentum.
                The team consists of talents who come from all walks of life.
                Each team member brings something unique to the table. Our
                desire to create great end-user experiences is what ties us all
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section our__values">
        <div className="container">
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="section__tagline">Core Values</p>
              <h2 className="title__2">
                Our Values Shape Everything We Do and How We Do It
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-12 gap-12 our__values__wrapper">
            <div className="sm:col-span-6">
              <div className="our__values__item">
                <span className="our__values__icon">
                  <img src={icon1} alt="Craftsmanship" width="76" height="76" />
                </span>
                <div className="our__values__body">
                  <h3 className="our__values__title">Craftsmanship</h3>
                  <p className="our__values__text">
                    Trusting our processes, mastery of our tools, understanding
                    the data, and the intuition of our individuals.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <div className="our__values__item">
                <span className="our__values__icon">
                  <img src={icon2} alt="Empathy" width="76" height="76" />
                </span>
                <div className="our__values__body">
                  <h3 className="our__values__title">Empathy</h3>
                  <p className="our__values__text">
                    It starts with the user, gathering experience, interviews,
                    research, or testing — customized and cumulative to reveal
                    greater truths.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <div className="our__values__item">
                <span className="our__values__icon">
                  <img src={icon3} alt="Collaboration" width="76" height="76" />
                </span>
                <div className="our__values__body">
                  <h3 className="our__values__title">Collaboration</h3>
                  <p className="our__values__text">
                    Co-create with our clients and team members. Fostering an
                    environment where we can learn and grow from each other:
                    knowledge sharing and brown bags.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <div className="our__values__item">
                <span className="our__values__icon">
                  <img src={icon4} alt="Curiosity" width="76" height="76" />
                </span>
                <div className="our__values__body">
                  <h3 className="our__values__title">Curiosity</h3>
                  <p className="our__values__text">
                    We channel what we’ve done, what we learn, and restless
                    curiosity into better ways of doing what’s next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section find__momentum relative">
        <div
          class="bg__holder find__momentum__bg"
          style={{ backgroundImage: `url(${findMomentumBG})` }}
        ></div>
        <div class="container">
          <div class="grid lg:grid-cols-12">
            <div class="lg:col-span-5">
              <p class="section__tagline">Our Team</p>
              <h2 class="title__2">Find Your Momentum</h2>
              <p>
                Our remote culture welcomes all talents with the expectation to
                be your best self and be present and ready to collaborate
                wherever you are in the world. We seek passionate
                problem-solvers, dreamers, open-minded and multi-faceted
                individuals of all levels with a global mindset — essentially a
                Unicorn. Come find your momentum with us.
              </p>
            </div>
          </div>
          <div class="find__momentum__wrapper">
            <div class="find__momentum__img">
              <img src={findMomentumImg1} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg3} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg3} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg3} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg3} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg2} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg3} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
            <div class="find__momentum__img">
              <img src={findMomentumImg4} alt="" width="220" height="140" />
            </div>
          </div>
        </div>
      </section>

      <section class="team__momentum">
        <div class="container">
          <div class="team__momentum__item">
            <p class="section__tagline">Business Development</p>
            <div class="team__momentum__table">
              <div class="team__momentum__row">
                <a href="#" class="team__momentum__title">
                  Market Business Development Manager (remote UK)
                </a>
                <span class="team__momentum__text">
                  UNITED KINGDOM, ENGLAND, LONDON
                </span>
              </div>
            </div>
          </div>
          <div class="team__momentum__item">
            <p class="section__tagline">Design</p>
            <div class="team__momentum__table">
              <div class="team__momentum__row">
                <a href="#" class="team__momentum__title">
                  Principal Product Designer
                </a>
                <span class="team__momentum__text">
                  UNITED STATES, CALIFORNIA, SAN MATEO
                </span>
              </div>
              <div class="team__momentum__row">
                <a href="#" class="team__momentum__title">
                  Product Designer
                </a>
                <span class="team__momentum__text">
                  UNITED KINGDOM, ENGLAND, LONDON
                </span>
              </div>
              <div class="team__momentum__row">
                <a href="#" class="team__momentum__title">
                  Product Designer
                </a>
                <span class="team__momentum__text">
                  UNITED STATES, CALIFORNIA, SAN MATEO
                </span>
              </div>
              <div class="team__momentum__row">
                <a href="#" class="team__momentum__title">
                  Senior Product Designer
                </a>
                <span class="team__momentum__text">
                  UNITED STATES, CALIFORNIA, SAN MATEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;

export const Head = () => <title>Careers Page</title>;
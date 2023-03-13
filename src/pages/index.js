import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "gatsby";
import React from "react";
import contactImg1 from "../assets/images/contact-1.jpeg";
import contactImg2 from "../assets/images/contact-2.png";
import innovationIcon1 from "../assets/images/innovation-1.webp";
import innovationIcon2 from "../assets/images/innovation-2.webp";
import innovationIcon3 from "../assets/images/innovation-3.webp";
import innovationIcon4 from "../assets/images/innovation-4.webp";
import postImg1 from "../assets/images/laptop.webp";
import problemSolverImg from "../assets/images/problem-solver.png";
import ratingImg from "../assets/images/testimonial-img.svg";
import heroImg1 from "../assets/images/wheel-blue.svg";
import heroImg2 from "../assets/images/wheel-strock.svg";
import Slider from "../components/Slider";
import SocialMedia from "../components/SocialMedia";
import Layout from "../layouts/Layout";

const IndexPage = () => {
  const homeSliderOptions = {
    type: "loop",
    pagination: false,
    arrows: true,
    perPage: 1,
    mediaQuery: "min",
    wheel: true,
    wheelSleep: 1000,
    speed: 1200,
    easing: "ease-in-out",
    destroy: true,
    breakpoints: {
      1024: {
        destroy: false,
        fixedHeight: "100vh",
        fixedWidth: "100vw",
      },
    },
  };
  const contactSliderOptions = {
    arrows: false,
    pagination: false,
    perPage: 1,
    mediaQuery: "min",
    padding: { right: "15%" },
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  };

  return (
    <Layout footerClass="lg:hidden">
      <Slider className="home__slider" options={homeSliderOptions}>
        <SplideSlide>
          <section className="hero__home relative">
            <div
              className="bg__holder hero__bg__1"
              style={{ backgroundImage: `url(${heroImg1})` }}
            ></div>
            <div
              className="bg__holder hero__bg__2"
              style={{ backgroundImage: `url(${heroImg2})` }}
            ></div>
            <div className="container section__header relative lg:min-h-screen lg:px-16 xl:px-24">
              <div className="max-w-2xl xl:max-w-3xl">
                <p className="section__tagline">An HTEC Group Company</p>

                <h1 className="title__1">Product Innovation Agency</h1>
                <p className="section__text">
                  We specialize in ways that improve the quality of products and
                  services. Through human empathy and intelligent data, we make
                  things better — impacting your customer service and beyond.
                </p>
                <div className="services__rating">
                  <img
                    src={ratingImg}
                    alt=""
                    className="img__fluid"
                    width="100"
                    height="100"
                  />
                  <div>
                    <p className="font-bold">
                      Globally Rated #1 UX Agency on Clutch.co
                    </p>
                    <p className="services__text">
                      6 Years In A Row
                      <Link to="#" className="link__underline">
                        Learn More
                        <svg
                          className="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timezone">
                <div className="timezone__item">
                  Silicon Valley <span className="time">10:31 PM</span>
                </div>
                <div className="timezone__item">
                  New York <span className="time">1:31 AM</span>
                </div>
                <div className="timezone__item">
                  London <span className="time">5:31 PM</span>
                </div>
                <div className="timezone__item">
                  Belgrade <span className="time">6:31 PM</span>
                </div>
              </div>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="background__video relative aspect-video lg:aspect-auto lg:min-h-screen">
            <video
              id="background-video"
              autoPlay
              loop
              muted
              poster="https://assets.website-files.com/62fd6332435916025b8fb1db/63570221b97d19d4ba603129_MDL - Reel - Desktop (compressed)-poster-00001.jpg"
            >
              <source
                src="https://assets.website-files.com/62fd6332435916025b8fb1db/63570221b97d19d4ba603129_MDL%20-%20Reel%20-%20Desktop%20(compressed)-transcode.mp4"
                type="video/mp4"
              />
            </video>
            <Link to="#" className="link__underline">
              Watch With Sound
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="section product__innovation grid place-items-center lg:min-h-screen">
            <div className="container lg:px-16 xl:px-24">
              <div className="flex flex-wrap items-center gap-y-12 lg:gap-x-12 justify-between">
                <div className="basis-full lg:basis-5/12 relative z-0">
                  <div className="index__counter__number">01</div>
                  <p className="section__tagline">What We Offer</p>
                  <h2 className="title__2">Product Innovation</h2>
                  <p className="mb-8">
                    We are strategic thinkers, designers, problem-solvers, and
                    innovators who continue to change the world. We offer
                    fast-paced proof of concepts to large-scale design
                    thinking-based service and product design programs to
                    maximize the return on your investment. Our services help
                    you achieve your business goals and exceed expectations
                    through collaboration and co-creation.
                  </p>
                  <Link
                    to="/services/"
                    className="btn btn__danger uppercase rounded-full"
                  >
                    Explore our services
                  </Link>
                </div>
                <div className="basis-full lg:basis-6/12">
                  <ul className="innovation__services__list reboot__list">
                    <li className="innovation__services__item">
                      <img
                        src={innovationIcon1}
                        alt=""
                        width="64"
                        height="64"
                        className="icon"
                      />
                      <div className="innovation__desc">
                        <h4 className="innovation__title">Research</h4>
                        <p className="innovation__text">
                          Intelligent solutions are born from data and insight.
                          Research is vital to our design-led approach.
                        </p>
                      </div>
                    </li>
                    <li className="innovation__services__item">
                      <img
                        src={innovationIcon2}
                        alt=""
                        width="64"
                        height="64"
                        className="icon"
                      />
                      <div className="innovation__desc">
                        <h4 className="innovation__title">Strategy</h4>
                        <p className="innovation__text">
                          Empathy drives your customers and overlaps with your
                          business goals to help us find the ideal path.
                        </p>
                      </div>
                    </li>
                    <li className="innovation__services__item">
                      <img
                        src={innovationIcon3}
                        alt=""
                        width="64"
                        height="64"
                        className="icon"
                      />
                      <div className="innovation__desc">
                        <h4 className="innovation__title">Design</h4>
                        <p className="innovation__text">
                          Great design is essential to business. Our
                          design-centric organization/culture permeates our
                          processes. We can provide team augmentation, project
                          teams, or scaled design ops to your organization.
                        </p>
                      </div>
                    </li>
                    <li className="innovation__services__item">
                      <img
                        src={innovationIcon4}
                        alt=""
                        width="64"
                        height="64"
                        className="icon"
                      />
                      <div className="innovation__desc">
                        <h4 className="innovation__title">Development</h4>
                        <p className="innovation__text">
                          Flexible and adaptable, we build client solutions
                          effortlessly and collaboratively. From team
                          augmentation to rapid POC or MVP to small agile to
                          large scale-ups teams, we can assist with your
                          development needs.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="section hero__posts grid place-items-center lg:min-h-screen">
            <div className="container lg:px-16 xl:px-24">
              <div className="flex flex-wrap items-center gap-y-12 lg:gap-x-12 justify-between">
                <div className="basis-full lg:basis-5/12 relative z-0">
                  <div className="index__counter__number">02</div>
                  <p className="section__tagline">What We Offer</p>
                  <h2 className="title__2">We Build Moments That Matter</h2>
                  <p className="mb-8">
                    From the onset of a collaboration, our design-thinking
                    process begins, defined by your measure of success—our
                    all-encompassing creative expertise and technical acumen
                    leverage a combination of tried and true principles to
                    deliver world-class solutions.
                  </p>
                  <Link
                    to="/work/"
                    className="btn btn__danger uppercase rounded-full"
                  >
                    View Our Work
                  </Link>
                </div>
                <div className="basis-full lg:basis-6/12">
                  <div className="hero__post">
                    <Link to="/case-study/" className="hero__post__img">
                      <img src={postImg1} alt="" width="470" height="360" />
                      <span className="graphic"></span>
                    </Link>
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
                    <h4 className="hero__post__title">
                      <Link to="/case-study/">
                        Brokers.io - Creating the Future of Accessible Crypto
                      </Link>
                    </h4>
                    <Link
                      to="/case-study/"
                      className="link__underline uppercase"
                    >
                      Learn More
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="section -mt-28 md:-mt-44 lg:mt-0 hero__posts grid place-items-center lg:min-h-screen">
            <div className="container lg:px-16 xl:px-24">
              <div className="grid grid-cols-2 items-center gap-y-12 lg:gap-x-12 justify-between">
                <div className="col-span-2 lg:col-span-1">
                  <div className="hero__post">
                    <Link to="/case-study/" className="hero__post__img">
                      <img src={postImg1} alt="" width="470" height="360" />
                      <span className="graphic"></span>
                    </Link>
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
                    <h4 className="hero__post__title">
                      <Link to="/case-study/">
                        Brokers.io - Creating the Future of Accessible Crypto
                      </Link>
                    </h4>
                    <Link
                      to="/case-study/"
                      className="link__underline uppercase"
                    >
                      Learn More
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="hero__post">
                    <Link to="/case-study/" className="hero__post__img">
                      <img src={postImg1} alt="" width="470" height="360" />
                      <span className="graphic"></span>
                    </Link>
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
                    <h4 className="hero__post__title">
                      <Link to="/case-study/">
                        Brokers.io - Creating the Future of Accessible Crypto
                      </Link>
                    </h4>
                    <Link
                      to="/case-study/"
                      className="link__underline uppercase"
                    >
                      Learn More
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="section grid place-items-center lg:min-h-screen">
            <div className="container">
              <div className="flex flex-wrap items-center gap-y-12 lg:gap-x-6 justify-between">
                <div className="basis-full lg:basis-6/12 2xl:basis-6/12 relative z-0">
                  <div className="index__counter__number">03</div>
                  <p className="section__tagline">What We Are</p>
                  <h2 className="title__2">
                    We are Digitally Obsessed, Human-Centered Problem Solvers
                    for the Modern World
                  </h2>
                  <p className="mb-8">
                    Inherent in our design-thinking culture, we continually
                    embrace any industry, device, objective, or technology
                    platform. Our drive to improve the human relationship with
                    technology by designing and building meaningful connections
                    between companies and their customers is indicative of who
                    we are.
                  </p>
                  <Link
                    to="/careers/"
                    className="btn btn__danger uppercase rounded-full"
                  >
                    Join Our Team
                  </Link>
                </div>
                <div className="basis-full lg:basis-5/12">
                  <img
                    src={problemSolverImg}
                    alt="Problem Solvers"
                    width="500"
                    height="360"
                    className="w-full lg:scale-125 "
                  />
                </div>
              </div>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="section hero__contacts grid place-items-center lg:min-h-screen">
            <div className="container">
              <div className="flex items-center gap-y-12 justify-between">
                <div className="basis-full lg:basis-1/3 relative z-0">
                  <p className="section__tagline">Contact Us</p>
                  <h2 className="title__2">
                    Hello. Bonjour. Hola. Salve. Guten tag. Zdravo.
                  </h2>
                  <p className="mb-8">
                    With global offices in Silicon Valley, New York City,
                    London, and Belgrade, we are available around the clock. Our
                    50+ team members, from account executives, strategists,
                    project managers/delivery leads, product designers, and
                    developers, are ready to find the best solution to any
                    challenges you face. Let's start collaborating!
                  </p>
                  <Link
                    to="/contact/"
                    className="btn btn__danger uppercase rounded-full"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="home__contact__wrapper">
                  <div className="basis-1/2">
                    <div className="home__contact__item">
                      <img src={contactImg1} alt="" width="480" height="320" />
                      <h4 className="home__contact__title">Silicon Valley</h4>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="home__contact__item">
                      <img src={contactImg2} alt="" width="480" height="320" />
                      <h4 className="home__contact__title">Silicon Valley</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="section hero__contacts grid place-items-center lg:min-h-screen">
            <div className="container">
              <div className="flex items-center justify-end gap-y-12">
                <div className="home__contact__wrapper reverse">
                  <div className="basis-1/2">
                    <div className="home__contact__item">
                      <img src={contactImg1} alt="" width="480" height="320" />
                      <h4 className="home__contact__title">London</h4>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="home__contact__item">
                      <img src={contactImg2} alt="" width="480" height="320" />
                      <h4 className="home__contact__title">Belgrade</h4>
                    </div>
                  </div>
                </div>
                <div className="basis-full lg:basis-1/3 relative z-0">
                  <div className="flex flex-col items-start h-full">
                    <p className="section__tagline">Contact Info</p>
                    <h2 className="title__2">
                      Ready to Create adn Collaborate?
                    </h2>
                    <Link
                      to="/contact/"
                      className="btn btn__danger uppercase rounded-full"
                    >
                      Let's Work Together
                    </Link>

                    <ul className="reboot__list mb-6 sm:mb-8 mt-8 lg:mt-32">
                      <li>
                        <a
                          href="mailto:hello@momentumio.com"
                          target="_blank"
                          rel="noreferrer"
                          className="widget__link"
                        >
                          hello@momentumio.com
                        </a>
                      </li>
                      <li>
                        US:
                        <a
                          href="tel:+ 1650 753 8157"
                          target="_blank"
                          rel="noreferrer"
                          className="widget__link"
                        >
                          &nbsp;+1650 753 8157
                        </a>
                      </li>
                      <li>
                        US:
                        <a
                          href="tel:+44 203 818 5916"
                          target="_blank"
                          rel="noreferrer"
                          className="widget__link"
                        >
                          &nbsp;+44 203 818 5916
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex absolute bottom-8 right-10">
                <SocialMedia />
              </div>
            </div>
          </section>
        </SplideSlide>
      </Slider>

      <section className="section lg:hidden">
        <Slider options={contactSliderOptions} label="Office Location Slider">
          <SplideSlide className="grid place-items-center">
            <div className="home__contact__item">
              <img src={contactImg1} alt="" width="480" height="320" />
              <h4 className="home__contact__title">Silicon Valley</h4>
            </div>
          </SplideSlide>
          <SplideSlide className="grid place-items-center">
            <div className="home__contact__item">
              <img src={contactImg2} alt="" width="480" height="320" />
              <h4 className="home__contact__title">Silicon Valley</h4>
            </div>
          </SplideSlide>
          <SplideSlide className="grid place-items-center">
            <div className="home__contact__item">
              <img src={contactImg1} alt="" width="480" height="320" />
              <h4 className="home__contact__title">London</h4>
            </div>
          </SplideSlide>
          <SplideSlide className="grid place-items-center">
            <div className="home__contact__item">
              <img src={contactImg2} alt="" width="480" height="320" />
              <h4 className="home__contact__title">Belgrade</h4>
            </div>
          </SplideSlide>
        </Slider>
      </section>

      <section className="section hero__contacts grid place-items-center lg:min-h-screen lg:hidden">
        <div className="container">
          <div className="flex items-center justify-end gap-y-12">
            <div className="home__contact__wrapper reverse">
              <div className="basis-1/2">
                <div className="home__contact__item">
                  <img src={contactImg1} alt="" width="480" height="320" />
                  <h4 className="home__contact__title">London</h4>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="home__contact__item">
                  <img src={contactImg2} alt="" width="480" height="320" />
                  <h4 className="home__contact__title">Belgrade</h4>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-1/3 relative z-0">
              <div className="flex flex-col items-start h-full">
                <p className="section__tagline">Contact Info</p>
                <h2 className="title__2">Ready to Create adn Collaborate?</h2>
                <Link
                  to="/contact/"
                  className="btn btn__danger uppercase rounded-full"
                >
                  Let's Work Together
                </Link>

                <ul className="reboot__list mb-6 sm:mb-8 mt-8 lg:mt-32">
                  <li>
                    <a
                      href="mailto:hello@momentumio.com"
                      target="_blank"
                      rel="noreferrer"
                      className="widget__link"
                    >
                      hello@momentumio.com
                    </a>
                  </li>
                  <li>
                    US:
                    <a
                      href="tel:+ 1650 753 8157"
                      target="_blank"
                      rel="noreferrer"
                      className="widget__link"
                    >
                      &nbsp;+1650 753 8157
                    </a>
                  </li>
                  <li>
                    US:
                    <a
                      href="tel:+44 203 818 5916"
                      target="_blank"
                      rel="noreferrer"
                      className="widget__link"
                    >
                      &nbsp;+44 203 818 5916
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex absolute bottom-8 right-10">
            <SocialMedia />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;

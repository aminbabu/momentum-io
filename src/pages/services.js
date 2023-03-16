import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import bgCircles from "../assets/images/bg-circles.png";
import customer1 from "../assets/images/customer-1.svg";
import customer2 from "../assets/images/customer-2.svg";
import customer3 from "../assets/images/customer-3.svg";
import customer4 from "../assets/images/customer-4.svg";
import customer5 from "../assets/images/customer-5.svg";
import customer6 from "../assets/images/customer-6.svg";
import leaderImg1 from "../assets/images/leader-1.png";
import leaderImg2 from "../assets/images/leader-2.png";
import leaderImg3 from "../assets/images/leader-3.png";
import leaderImg4 from "../assets/images/leader-4.png";
import leaderImg5 from "../assets/images/leader-5.png";
import ratingImg from "../assets/images/services-rating.png";
import NavTabs from "../components/NavTabs";
import Slider from "../components/Slider";
import TestimonialCard from "../components/TestimonialCard";
import Layout from "../layouts/Layout";
import data from "../storage/services.json";

const isBrowser = typeof window !== "undefined";

const ServicesPage = () => {
  const [theme, setTheme] = useState("light");
  const [scrollPosition, setScrollPosition] = useState(0);

  const testimonialOptions = {
    perMove: 1,
    padding: { right: "15%" },
    arrows: true,
    pagination: false,
    updateOnMove: true,
    speed: 600,
    ease: "ease-in-out",
    mediaQuery: "min",
    breakpoints: {
      0: {
        gap: "1rem",
      },
      640: {
        perPage: 2,
        gap: "1.5rem",
      },
      1024: {
        perPage: 3,
      },
      1280: {
        gap: "2rem",
      },
    },
  };

  useEffect(() => {
    if (isBrowser) {
      // your code here
      const handleScroll = (event) => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [scrollPosition]);

  return (
    <Layout theme={theme}>
      <section className="section__header services__header relative">
        <div
          className="bg__holder"
          style={{ backgroundImage: `url(${bgCircles})` }}
        ></div>
        <div className="container">
          <div className="inner__content">
            <h1 className="title__1">
              Silicon Valley Expertise. Global Mindset.
            </h1>
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
        </div>
      </section>

      <section className="section startup__titans">
        <div className="container">
          <div className="inner__content">
            <p className="section__tagline">A Proven Track Record</p>
            <h2 className="title__2">From Startups to Titans of Industries</h2>
            <p>
              Our talk track is minimal; our work proves itself. As a testament
              to our purpose-driven product design beliefs and meticulous
              approach to our craft, we built deep relationships with people at
              all levels in organizations, from early-stage start-ups to Fortune
              100 companies. With their vision and our drive, we have moved
              mountains together.
            </p>
          </div>
          <ul className="startup__titans__list reboot__list">
            <li
              className="startup__titans__item"
              style={{ backgroundColor: "rgb(68, 96, 135)", color: "#ffffff" }}
            >
              <div className="startup__titans__title">20 Yrs</div>
              <p className="startup__titans__text">
                Digital Product UX (since 2002)
              </p>
            </li>
            <li
              className="startup__titans__item"
              style={{
                backgroundColor: "rgb(246, 244, 239)",
                color: "#1d3557",
              }}
            >
              <div className="startup__titans__title">750+</div>
              <p className="startup__titans__text">
                Projects Designed and Developed
              </p>
            </li>
            <li
              className="startup__titans__item"
              style={{ backgroundColor: "rgb(29, 53, 87)", color: "#ffffff" }}
            >
              <div className="startup__titans__title">7%</div>
              <p className="startup__titans__text">
                Customers are in the Fortune 500
              </p>
            </li>
            <li
              className="startup__titans__item"
              style={{ backgroundColor: "rgb(68, 96, 135)", color: "#ffffff" }}
            >
              <div className="startup__titans__title">$41B+</div>
              <p className="startup__titans__text">Value Created</p>
            </li>
            <li
              className="startup__titans__item"
              style={{
                backgroundColor: "rgb(246, 244, 239)",
                color: "#1d3557",
              }}
            >
              <div className="startup__titans__title">53%</div>
              <p className="startup__titans__text">Customer Acquisitions</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section services__features">
        <div className="container">
          <NavTabs />
        </div>
      </section>

      <section className="section previous__customers">
        <div className="container">
          <h2 className="title__3">Past Two Years Customers</h2>
          <div className="flex flex-wrap">
            <div className="customer__item">
              <img src={customer1} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer2} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer3} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer4} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer5} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer6} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer1} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer2} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer3} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer4} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer5} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer6} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer1} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer2} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer3} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer4} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer5} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer6} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer1} alt="" width="120" height="96" />
            </div>
            <div className="customer__item">
              <img src={customer2} alt="" width="120" height="96" />
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <p className="section__tagline">Awards & Testimonials</p>
          <h2 className="title__2 mt-3 mb-12">
            Read What Others Are <br className="hidden md:block" /> Saying About
            Us
          </h2>
          <Slider options={testimonialOptions} label="Testimonial Slider">
            {data?.testimonials?.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </section>

      <section className="section services__industries">
        <div className="container">
          <div className="inner__content">
            <p className="section__tagline">Who We Work With</p>
            <h2 className="title__2">All Industries</h2>
            <p>
              We support global brands, startups and enterprises that use
              innovation and human-centered design to create meaningful customer
              experiences.
            </p>
          </div>
          <ul className="industries__list reboot__list">
            <li className="industries__item">
              <h4 className="industries__title">Financial Services</h4>
              <p className="industries__text">
                Our customers range from startups to the largest financial
                institutions across the globe. Staying true to our mission,
                we’ve helped maximize their ROI.
              </p>
            </li>
            <li className="industries__item">
              <h4 className="industries__title">Healthcare</h4>
              <p className="industries__text">
                In the Healthcare industry, we can relate to a common theme;
                quality care. We do our part to deliver the highest-quality work
                with attention to detail for our clients.
              </p>
            </li>
            <li className="industries__item">
              <h4 className="industries__title">Ad Marketing / Technology</h4>
              <p className="industries__text">
                We support many clients in mobile, social advertising agencies,
                and technology service providers—we've increased their target
                audience conversions through powerful insight and AI tools and
                improved efficiency.
              </p>
            </li>
            <li className="industries__item">
              <h4 className="industries__title">
                High Tech & Software Startups
              </h4>
              <p className="industries__text">
                Technology is fast-paced and ever-changing; we strive to move
                even faster. We work with business leaders to bring together
                people, new ideas, and technology to create unique and viable
                platforms for their customers.
              </p>
            </li>
            <li className="industries__item">
              <h4 className="industries__title">Consumer Products</h4>
              <p className="industries__text">
                Designing and developing quality consumable products involves
                deep dives to understand user-needs. In our initial
                design-thinking led process we start with your customer and work
                backwards to find the right solution.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section our__leadership">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="left">
              <p className="section__tagline">Our Thought Leadership</p>
              <h2 className="title__2">Simplifying the Complexity</h2>
            </div>
            <div className="right">
              <p className="mb-4 lg:mb-6">
                We embrace critical thinking, creativity, experience, and
                intuition to thrive in uncharted territory to find answers to
                undefined challenges. We are limitless and go beyond simple
                curiosity. Our DNA craves the new, overlooked, and next that
                promises our clients fresh, relevant, and innovative products to
                help support their brands, solve problems, create opportunities
                and generate growth.
              </p>
              <p>Meet our Thought Leadership team who’s leading the way.</p>
            </div>
          </div>
          <ul className="leaders__list reboot__list">
            <li className="leaders__list__item">
              <img src={leaderImg1} alt="" width="345" height="425" />
              <div className="content">
                <h4 className="leaders__title">David Thomson</h4>
                <p>CEO</p>
              </div>
            </li>
            <li className="leaders__list__item">
              <img src={leaderImg2} alt="" width="345" height="425" />
              <div className="content">
                <h4 className="leaders__title">David Thomson</h4>
                <p>CEO</p>
              </div>
            </li>
            <li className="leaders__list__item">
              <img src={leaderImg3} alt="" width="345" height="425" />
              <div className="content">
                <h4 className="leaders__title">David Thomson</h4>
                <p>CEO</p>
              </div>
            </li>
            <li className="leaders__list__item">
              <img src={leaderImg4} alt="" width="345" height="425" />
              <div className="content">
                <h4 className="leaders__title">David Thomson</h4>
                <p>CEO</p>
              </div>
            </li>
            <li className="leaders__list__item">
              <img src={leaderImg5} alt="" width="345" height="425" />
              <div className="content">
                <h4 className="leaders__title">David Thomson</h4>
                <p>CEO</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => <title>Services</title>;

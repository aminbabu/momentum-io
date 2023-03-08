import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import officeImg1 from "../assets/images/office-1.webp";
import officeImg2 from "../assets/images/office-2.webp";
import officeImg3 from "../assets/images/office-3.webp";
import officeImg4 from "../assets/images/office-4.webp";
import Layout from "../layouts/Layout";
import { setTheme } from "../redux/features/settingsSlice/settingsSlice";

const initialState = {
  name: "",
  country: "",
  email: "",
  phone: "",
  budget: "",
  source: "",
  message: "",
};

const ContactPage = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(initialState);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setQuery((prevQuery) => {
      return { ...prevQuery, [name]: value };
    });
  };

  useEffect(() => {
    dispatch(setTheme("dark"));
  }, [dispatch]);

  const { name, country, email, phone, budget, source, message } = query;

  return (
    <Layout>
      <section className="section__header talk__together">
        <div className="container">
          <div className="flex flex-wrap gap-y-10 lg:gap-y-0 lg:items-center lg:justify-between">
            <div className="lg:basis-1/3">
              <h1 className="title__2">Let’s Work Together</h1>
              <p className="mb-6">
                At Momentum we help global brands, startups and enterprises use
                innovation and human-centered design to create meaningful user
                experiences.
              </p>
              <button
                type="button"
                className="btn btn__danger rounded-full contact__btn__link"
              >
                Schedule a Meeting
              </button>
            </div>
            <div className="lg:basis-5/12">
              <div className="widget__item">
                <h6 className="widget__title">Contact Us</h6>
                <ul className="reboot__list mb-6 sm:mb-8">
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
                      + 1650 753 8157
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
                      +44 203 818 5916
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact__card">
            <h3 className="contact__card__title">Project Inquiry</h3>
            <form>
              <div className="grid md:grid-cols-2 gap-y-10 gap-x-8">
                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    className="form__control"
                    placeholder="Name*"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    className="form__control"
                    placeholder="Company*"
                    name="country"
                    value={country}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="email"
                    className="form__control"
                    placeholder="Email*"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    className="form__control"
                    placeholder="Phone*"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-normal fw-medium px-3">Budget*</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="budget__input">
                      <input
                        type="radio"
                        className="btn__check"
                        name="budget"
                        id="option1"
                        autoComplete="off"
                        value="option1"
                        checked={budget === "option1"}
                        onChange={handleChange}
                      />
                      <label htmlFor="option1" className="btn rounded-full">
                        &lt; $50,000
                      </label>
                    </div>
                    <div className="budget__input">
                      <input
                        type="radio"
                        className="btn__check"
                        name="budget"
                        id="option2"
                        autoComplete="off"
                        value="option2"
                        checked={budget === "option2"}
                        onChange={handleChange}
                      />
                      <label htmlFor="option2" className="btn rounded-full">
                        $50,000 - $100,000
                      </label>
                    </div>
                    <div className="budget__input">
                      <input
                        type="radio"
                        className="btn__check"
                        name="budget"
                        id="option3"
                        autoComplete="off"
                        value="option3"
                        checked={budget === "option3"}
                        onChange={handleChange}
                      />
                      <label htmlFor="option3" className="btn rounded-full">
                        $100,000 - $250,000
                      </label>
                    </div>
                    <div className="budget__input">
                      <input
                        type="radio"
                        className="btn__check"
                        name="budget"
                        id="option4"
                        autoComplete="off"
                        value="option4"
                        checked={budget === "option4"}
                        onChange={handleChange}
                      />
                      <label htmlFor="option4" className="btn rounded-full">
                        &gt; $250,000
                      </label>
                    </div>
                    <div className="budget__input">
                      <input
                        type="radio"
                        className="btn__check"
                        name="budget"
                        id="option5"
                        autoComplete="off"
                        value="option5"
                        checked={budget === "option5"}
                        onChange={handleChange}
                      />
                      <label htmlFor="option5" className="btn rounded-full">
                        Can't Reveal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <textarea
                    rows="8"
                    className="form__control"
                    placeholder="Tell us about your project*"
                    name="message"
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <select
                    className="form__control"
                    value={source}
                    name="source"
                    onChange={handleChange}
                  >
                    <option value="0" hidden>
                      How did you hear about us*
                    </option>
                    <option value="1">Google</option>
                    <option value="2">Facebook</option>
                    <option value="3">Twitter</option>
                    <option value="4">Instagram</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="btn btn__danger text-uppercase rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section our__offices">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5 xl:col-span-4">
              <h2 className="title__2">
                Hello. Bonjour. Hola. Salve. Guten tag. Zdravo.
              </h2>
              <p>
                With global offices in Silicon Valley, New York City, London,
                and Belgrade, we are available around the clock. Our 50+ team
                members, from account executives, strategists, project
                managers/delivery leads, product designers, and developers, are
                ready to find the best solution to any challenges you face.
                Let's start collaborating!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 our__offices__wrapper">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="our__offices__item">
                <div className="our__offices__img">
                  <img
                    src={officeImg1}
                    alt="Silicon Valley"
                    width="76"
                    height="76"
                  />
                </div>
                <div className="our__offices__body">
                  <h3 className="our__offices__title">Silicon Valley</h3>
                  <p className="our__offices__text">300 8th Ave, Ste 200</p>
                  <p className="our__offices__text">San Mateo, CA 94401</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="our__offices__item">
                <div className="our__offices__img">
                  <img
                    src={officeImg2}
                    alt="New York City"
                    width="76"
                    height="76"
                  />
                </div>
                <div className="our__offices__body">
                  <h3 className="our__offices__title">New York City</h3>
                  <p className="our__offices__text">27 W 24th St, Ste 1105</p>
                  <p className="our__offices__text">New York, NY 10010</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="our__offices__item">
                <div className="our__offices__img">
                  <img src={officeImg3} alt="London" width="76" height="76" />
                </div>
                <div className="our__offices__body">
                  <h3 className="our__offices__title">London</h3>
                  <p className="our__offices__text">New York, NY 10010</p>
                  <p className="our__offices__text">London EC2A 3AY</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="our__offices__item">
                <div className="our__offices__img">
                  <img src={officeImg4} alt="Belgrade" width="76" height="76" />
                </div>
                <div className="our__offices__body">
                  <h3 className="our__offices__title">Belgrade</h3>
                  <p className="our__offices__text">7/Đ Milutina Milankovica</p>
                  <p className="our__offices__text">Belgrade 11070</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;

import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import logo from "../../assets/images/icon-logo.svg";
import data from "../../storage/header.json";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  const { navLinks } = data.header;
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = site.siteMetadata;

  return (
    <footer className="footer__main">
      <div className="container max-w-full">
        <div className="footer__widgets">
          <div className="left">
            <div className="widget__item">
              <p className="text-white mb-4 text-base">
                We would love to hear more from you!
              </p>
              <Link
                to="/contact/"
                className="btn btn__danger rounded-full uppercase"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="widget__item order-2 md:order-1">
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
              <SocialMedia className="lg:hidden" />
            </div>
            <div className="vt__line order-1 hidden md:block"></div>
            <div className="widget__item order-1">
              <h6 className="widget__title">Sitemap</h6>
              <ul className="reboot__list widget__nav">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="widget__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="vt__line order-1 hidden sm:block"></div>
            <div className="widget__item order-1">
              <h6 className="widget__title">Locations</h6>
              <ul className="reboot__list">
                <li>Silicon Valley</li>
                <li>New York City</li>
                <li>London</li>
                <li>Belgrade</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyrights">
          <div className="left">
            <div className="copyright__links">
              <Link to="/" className="footer__brand">
                <img src={logo} alt={title} width="80" height="80" />
              </Link>
              <Link
                to="/company"
                className="copyright__link sm:ml-auto lg:ml-0"
              >
                An HTEC Group Company
              </Link>
              <Link to="/privacy/" className="copyright__link">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="right hidden lg:block">
            <SocialMedia className="justify-end" />
          </div>
        </div>
        <p className="copyright__text">
          © 2023 Momentum Design Lab, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

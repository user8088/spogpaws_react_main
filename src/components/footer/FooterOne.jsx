import React from "react";
import { Link } from "react-router-dom";
import wLogo from "../../assets/img/logo/w_logo.png";
import newsletterShape from "../../assets/img/images/footer_newsletter_shape.svg";
import footerShape01 from "../../assets/img/images/footer_shape01.png";
import footerShape02 from "../../assets/img/images/footer_shape02.png";

export const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="footer__top fix">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__logo">
                      <Link to="/">
                        <img src={wLogo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__content">
                      <p>
                        555 A, East Manster Street, Ready Halley Neon, Uk 4512
                      </p>
                      <a href="tel:0123456789">+00 123 45678 44</a>
                      <a href="mailto:Supportinfo@gmail.com">
                        Supportinfo@gmail.com
                      </a>
                    </div>
                    <div className="footer__social">
                      <h6 className="title">Follow Us On:</h6>
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Quick Links</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          <Link to="/animal">Animal Rescue</Link>
                        </li>
                        <li>
                          <Link to="/contact">Humane Education</Link>
                        </li>
                        <li>
                          <Link to="/animal-details">Animal Hospital</Link>
                        </li>
                        <li>
                          <Link to="/animal">Street Animal Feeding</Link>
                        </li>
                        <li>
                          <Link to="/">Homepage 01</Link>
                        </li>
                        <li>
                          <Link to="/pricing">Pricing Table</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Opening Hours</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          Monday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Tuesday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Thursday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Friday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Saturday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Sunday <span>8.00 - 21.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__newsletter">
                      <h2 className="title">Subscribe to our newsletter</h2>
                      <div className="shape">
                        <img
                          src={newsletterShape}
                          alt="newsletter shape"
                          className="injectable"
                        />
                      </div>
                      <form action="#">
                        <input
                          id="email"
                          type="email"
                          placeholder="Type Your E-mail"
                        />
                        <button className="btn" type="submit">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__shape-wrap">
              <img
                src={footerShape01}
                alt="footer shape"
                data-aos="fade-up-right"
                data-aos-delay="400"
              />
              <img
                src={footerShape02}
                alt="footer shape"
                data-aos="fade-up-left"
                data-aos-delay="400"
              />
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="footer__bottom-menu">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">Support</Link>
                      </li>
                      <li>
                        <Link to="/contact">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/contact">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/contact">Career</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="copyright-text text-end">
                    <p>Copyright © 2024. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

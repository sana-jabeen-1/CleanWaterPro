import Image from "next/image";
import Link from "next/link";

const FooterOne = () => {
  return (
    <>
      <footer className="footer-one">
        <div
          className="footer-one__bg"
          style={{
            backgroundImage: `url(/assets/images/backgrounds/)`,
          }}
        ></div>
        <div className="footer-one__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-one__top-wrapper">
                  <div className="row">
                    {/* Start Footer Widget Column */}
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="footer-widget__column footer-widget__about">
                        <div className="footer-widget__about-logo">
                          <Link
                            href="/"
                            style={{
                              display: "block",
                            }}
                          >
                            <Image
                              src="/assets/images/resources/footer-logo1.png"
                              alt="Clean Water pros logo"
                              width={150}
                              height={100}
                              style={{
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <Image
                              src="/assets/images/resources/westinghouse-logo-white.png"
                              alt="westing house authorized logo"
                              width={100}
                              height={100}
                              style={{
                                objectFit: "cover",
                              }}
                            />
                            <p
                              style={{
                                color: "white",
                                fontSize: "18px",
                                fontWeight: "700",
                              }}
                            >
                              Authorized Dealer
                            </p>
                          </div>
                        </div>
                        <p className="footer-widget__about-text">
                          At Clean Water Pro’s, we provide top-quality water
                          purification solutions for your home.
                        </p>

                        <div className="social-link">
                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/people/Clean-Water-Pros-LLC/61565018964527/"
                                target="_blank"
                              >
                                <span className="icon-facebook"></span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/cleanwaterprosllc/"
                                target="_blank"
                              >
                                <span className="icon-instagram"></span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/company/clean-water-pro-s-llc/"
                                target="_blank"
                              >
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                            {/* <li>
                              <a href="#">
                                <span className="icon-twitter"></span>
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Footer Widget Column */}

                    {/* Start Footer Widget Column */}
                    <div
                      className="col-xl-2 col-lg-2 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="footer-widget__column footer-widget__links mar-l">
                        <h2 className="footer-widget__title">Useful Links</h2>
                        <ul className="footer-widget__links-list">
                          <li className="footer-widget__links-list-item">
                            <Link href="/about-us">About</Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/services">Services</Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/certifications">Certifications</Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/testimonials">Testimonials</Link>
                          </li>
                          {/*  <li className="footer-widget__links-list-item">
                            <Link href="/testimonial">Testimonials</Link>
                          </li> */}
                          {/*  <li className="footer-widget__links-list-item">
                            <Link href="/team">Team</Link>
                          </li> */}
                          <li className="footer-widget__links-list-item">
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Footer Widget Column */}

                    {/* Start Footer Widget Column */}
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="footer-widget__column footer-widget__links mrt-60">
                        <h2 className="footer-widget__title">Menu</h2>
                        <ul className="footer-widget__links-list">
                          <li className="footer-widget__links-list-item">
                            <Link href="/westinghouse-dynamic-series">
                              Dynamic Series
                            </Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/dynamic-products/iron-boss">
                              Iron Boss
                            </Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/dynamic-products/qualitair">
                              Qualitair
                            </Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/dynamic-products/ultraviolet-lite-sterilization">
                              UV Sterilization
                            </Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/dynamic-products/healthway-disinfection-filtration-system">
                              Disinfection Filtration
                            </Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/dynamic-products/drinking-water-d550">
                              Drinking Water D550
                            </Link>
                          </li>
                          <li className="footer-widget__links-list-item">
                            <Link href="/dynamic-products/drinking-water-r450">
                              Drinking Water R450
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Footer Widget Column */}

                    {/* Start Footer Widget Column */}
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      {/* <div className="footer-widget__column footer-widget__gallery mrt-60">
                        <h2 className="footer-widget__title">Our Gallery</h2>
                        <ul>
                          <li className="footer-widget__gallery-single">
                            <div className="img-box">
                              <img
                                src="/assets/images/footer/footer-v1-img1.png"
                                alt=""
                              />
                              <div className="overlay-icon">
                                <Link href="/">
                                  <span className="icon-link"></span>
                                </Link>
                              </div>
                            </div>
                          </li>

                          <li className="footer-widget__gallery-single">
                            <div className="img-box">
                              <img
                                src="/assets/images/footer/footer-v1-img2.png"
                                alt=""
                              />
                              <div className="overlay-icon">
                                <Link href="/">
                                  <span className="icon-link"></span>
                                </Link>
                              </div>
                            </div>
                          </li>

                          <li className="footer-widget__gallery-single">
                            <div className="img-box">
                              <img
                                src="/assets/images/footer/footer-v1-img3.png"
                                alt=""
                              />
                              <div className="overlay-icon">
                                <Link href="/">
                                  <span className="icon-link"></span>
                                </Link>
                              </div>
                            </div>
                          </li>

                          <li className="footer-widget__gallery-single">
                            <div className="img-box">
                              <img
                                src="/assets/images/footer/footer-v1-img4.png"
                                alt=""
                              />
                              <div className="overlay-icon">
                                <Link href="/">
                                  <span className="icon-link"></span>
                                </Link>
                              </div>
                            </div>
                          </li>

                          <li className="footer-widget__gallery-single">
                            <div className="img-box">
                              <img
                                src="/assets/images/footer/footer-v1-img5.png"
                                alt=""
                              />
                              <div className="overlay-icon">
                                <Link href="/">
                                  <span className="icon-link"></span>
                                </Link>
                              </div>
                            </div>
                          </li>

                          <li className="footer-widget__gallery-single">
                            <div className="img-box">
                              <img
                                src="/assets/images/footer/footer-v1-img6.png"
                                alt=""
                              />
                              <div className="overlay-icon">
                                <Link href="/">
                                  <span className="icon-link"></span>
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div> */}
                    </div>

                    {/* End Footer Widget Column */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Footer One Bottom */}
        <div className="footer-one__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-one__bottom-inner">
                  <div className="footer-one__bottom-text">
                    <p>
                      ™ & © 2025 Westinghouse Electric Corporation. All Rights
                      Reserved. | Designed by{" "}
                      <Link href={"https://bmymarketer.com"} target="_blank">
                        B My Marketer
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer One Bottom */}
      </footer>
    </>
  );
};

export default FooterOne;
